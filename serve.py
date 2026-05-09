#!/usr/bin/env python
import http.server
import os
import subprocess
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

subprocess.run(["python", "build.py"], check=True)

os.chdir("_build")

import socket

while True:
    try:
        with socket.socket() as s:
            s.bind(("", PORT))
        break
    except OSError:
        print(f"Port {PORT} in use, trying {PORT + 1}...")
        PORT += 1

print(f"\nServing at http://localhost:{PORT}\n")
http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler, port=PORT, bind="")
