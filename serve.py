#!/usr/bin/env python
import http.server
import os
import subprocess
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

subprocess.run(["python", "build.py"], check=True)

os.chdir("_build")
print(f"\nServing at http://localhost:{PORT}\n")
import threading, webbrowser
threading.Timer(0.5, lambda: webbrowser.open(f"http://localhost:{PORT}")).start()
http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler, port=PORT, bind="")
