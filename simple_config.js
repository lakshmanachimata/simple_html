document.addEventListener("DOMContentLoaded", function() {
    var refreshBtn = document.getElementById("stopRefresh");
    refreshBtn.addEventListener("click", function() {
        // Check current button state by looking for the text "Stop Refresh"
        if (this.innerHTML.includes("Stop Refresh")) {
            // Change to Start Refresh with play icon
            this.innerHTML = '<span class="btn-icon">▶</span> Start Refresh';
            // Add code here to stop auto-refresh if required
        } else {
            // Change back to Stop Refresh with pause icon
            this.innerHTML = '<span class="btn-icon">⏸</span> Stop Refresh';
            // Add code here to start/resume auto-refresh if required
        }
    });
});