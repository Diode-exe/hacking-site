<script>
document.querySelectorAll('.tool-comparison td').forEach(cell => {
    cell.addEventListener('click', function () {
        if (this.innerText.includes("John the Ripper")) {
            alert("John the Ripper: A fast password cracker that detects weak passwords.");
        }
        else if (this.innerText.includes("Metasploit")) {
            alert("Metasploit: A powerful penetration testing framework for discovering, exploiting, and validating vulnerabilities.");
        }
        // You can add more conditions for other tools...
    });
});
</script>
