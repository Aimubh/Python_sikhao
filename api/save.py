"""Vercel serverless function: POST /api/save"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _shared import make_handler

handler = make_handler("/api/save")
