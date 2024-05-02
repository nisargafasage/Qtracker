function updateTextInfo() {
        let text = document.getElementById("usertext").value;
        let words = text.split(/\s+/).filter(word => word.length > 0).length;
        document.getElementById("op").innerHTML = "This text contains " + words + " words and " + text.length + " characters";
    }

    function transformToUpperCase() {
        let text = document.getElementById("usertext").value;
        document.getElementById("usertext").value = text.toUpperCase();
        updateTextInfo();
    }

    function transformToLowerCase() {
        let text = document.getElementById("usertext").value;
        document.getElementById("usertext").value = text.toLowerCase();
        updateTextInfo();
    }

    function searchText() {
        let text = document.getElementById("usertext").value;
        let searchStr = prompt("Enter text to search:");
        if (searchStr) {
            let index = text.indexOf(searchStr);
            if (index !== -1) {
                alert("Text found at position: " + index);
            } else {
                alert("Text not found.");
            }
        }
    }

    function changeTextColor() {
        let text = document.getElementById("usertext");
        text.style.color = getRandomColor();
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function clearText() {
        document.getElementById("usertext").value = "";
        updateTextInfo();
    }

    