"""
SMART AI INTERVIEW ASSISTANT - Proctoring & Anti-Malpractice Engine
Grounded in Expert Hire & HireVue cheating detection standards:
- Tab switches & loss of window focus
- Multiple display detection
- AI Assistant overlay detection
"""

from typing import Dict, Any, List

class CheatingDetectorService:
    def __init__(self):
        self.flag_threshold = 3

    def process_telemetry_event(self, session_id: int, event_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Logs proctoring telemetry and calculates real-time integrity status.
        """
        event_type = event_data.get("event_type")
        timestamp = event_data.get("timestamp")
        
        severity_map = {
            "tab_switch": "medium",
            "multiple_monitors": "medium",
            "ai_assistant_overlay": "high",
            "gaze_deviation": "low"
        }
        
        severity = severity_map.get(event_type, "low")
        
        return {
            "session_id": session_id,
            "event_type": event_type,
            "severity": severity,
            "flagged": severity == "high" or event_data.get("count", 1) >= self.flag_threshold,
            "action_recommended": "human_reviewer_flag" if severity == "high" else "warn_candidate",
            "audit_note": f"Integrity event '{event_type}' detected at {timestamp}. Flag logged for reviewer audit."
        }
