function analyzeBPS() {
    let sleep = parseInt(document.getElementById("sleep").value);
    let exercise = document.getElementById("exercise").value;
    let social = document.getElementById("social").value;

    let result = "";
    let recommendation = "";

    // AI-like scoring
    let score = 0;

    if (sleep >= 7) score++;
    if (exercise === "Sometimes" || exercise === "Regularly") score++;
    if (social === "Yes") score++;

    // Based on score decide category
    if (score === 3) {
        result = "✔ Balanced lifestyle detected!";
        recommendation = "Great job! Maintain your healthy sleep, exercise, and social habits.";
    }
    else if (score === 2) {
        result = "⚠ Moderately balanced lifestyle.";
        recommendation = "Improve one area such as sleep, exercise, or social interaction.";
    }
    else if (score === 1) {
        result = "❗ Unbalanced lifestyle detected.";
        recommendation = "Focus on improving your sleep, exercise, or social habits.";
    }
    else {
        result = "🚨 High risk lifestyle pattern.";
        recommendation = "Consider improving all three areas for better well-being.";
    }

    document.getElementById("result").innerHTML = result;
    document.getElementById("recommendation").innerHTML = recommendation;
}