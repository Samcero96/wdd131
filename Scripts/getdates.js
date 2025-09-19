<script>
    document.addEventListener("DOMContentLoaded", function () {
        // Function to update footer details
        function updateFooter() {
            // Current year
            const yearSpan = document.querySelector("#currentyear");
            yearSpan.textContent = new Date().getFullYear();

            // Last modified date
            const modified = document.querySelector("#lastModified");
            modified.textContent = "Last Modification: " + document.lastModified;
        }

    // Call the function
    updateFooter();
  });
</script>
