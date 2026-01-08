function initDiff(historyJson) {
    // timeline order: [initial, ..., latest]
    const timelineData = [...historyJson].reverse();
    let currentTimelineIndex = timelineData.length - 1;

    const timeline = document.getElementById('timeline');
    timelineData.forEach((rev, i) => {
        const dot = document.createElement('div');
        dot.className = 'rev-dot';
        dot.title = rev.subject;
        dot.onclick = () => renderRevision(i);
        timeline.appendChild(dot);
    });

    // Handle deep link
    const urlParams = new URLSearchParams(window.location.search);
    const targetHash = urlParams.get('commit');
    if (targetHash) {
        const idx = timelineData.findIndex(h => h.hash.startsWith(targetHash));
        if (idx !== -1) currentTimelineIndex = idx;
    }

    function renderRevision(timelineIdx) {
        currentTimelineIndex = timelineIdx;
        
        // Update dots
        document.querySelectorAll('.rev-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === timelineIdx);
        });

        const current = timelineData[timelineIdx];
        const previous = timelineData[timelineIdx - 1] || { content: '', hash: 'Initial' };

        // Update Metadata
        let formattedDate = 'N/A';
        try {
            const dateObj = new Date(current.date);
            if (!isNaN(dateObj.getTime())) {
                formattedDate = dateObj.toISOString().split('T')[0];
            }
        } catch (e) {
            console.error("Date parsing error:", e);
        }

        document.getElementById('commitMsg').innerText = current.subject;
        document.getElementById('commitHash').innerText = current.hash.substring(0, 7);
        document.getElementById('commitDate').innerText = formattedDate;
        document.getElementById('rev-date').innerText = formattedDate;
        
        document.getElementById('hashTransition').innerText = `${previous.hash.substring(0, 7)} \u2192 ${current.hash.substring(0, 7)}`;

        const diffContainer = document.getElementById('diffContainer');
        diffContainer.innerHTML = '';

        // Compute Diff
        const diff = Diff.diffLines(previous.content, current.content);
        
        let oldLineNum = 1;
        let newLineNum = 1;

        diff.forEach(part => {
            const lines = part.value.split('\n');
            if (lines[lines.length - 1] === '') lines.pop();

            lines.forEach(line => {
                const row = document.createElement('div');
                row.className = 'diff-line';

                let oldLn = '';
                let newLn = '';
                if (part.added) {
                    row.classList.add('line-add');
                    newLn = newLineNum++;
                } else if (part.removed) {
                    row.classList.add('line-remove');
                    oldLn = oldLineNum++;
                } else {
                    oldLn = oldLineNum++;
                    newLn = newLineNum++;
                }

                row.innerHTML = `
                    <div class="ln">${oldLn}</div>
                    <div class="ln ln-sep">${newLn}</div>
                    <div class="code-text">${escapeHtml(line)}</div>
                `;

                diffContainer.appendChild(row);
            });
        });
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    renderRevision(currentTimelineIndex);
}
