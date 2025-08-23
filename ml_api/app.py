from flask import Flask, request, jsonify
import pandas as pd
import os

app = Flask(__name__)

# Path to your CSV file
DATA_FILE = "disease_dataset.csv"

# Check if file exists
if not os.path.exists(DATA_FILE):
    raise FileNotFoundError(f"{DATA_FILE} not found in ml_api folder.")

# Load dataset
df = pd.read_csv(DATA_FILE)

# Create a dictionary for quick lookups
disease_data = {
    row['disease'].strip().lower(): {
        'info': row['disease_info'],
        'medicine': row['medicine']
    }
    for _, row in df.iterrows()
}

@app.route("/")
def home():
    return "✅ Medical Chatbot API is running! Use /get_medicine?disease=<name> to query."

@app.route("/get_medicine", methods=["GET"])
def get_medicine():
    # Get disease name from query string
    disease_name = request.args.get("disease", "").strip().lower()

    if not disease_name:
        return jsonify({"error": "Please provide a disease name in the query string, e.g., /get_medicine?disease=fever"})

    if disease_name in disease_data:
        return jsonify({
            "disease": disease_name,
            "info": disease_data[disease_name]['info'],
            "medicine": disease_data[disease_name]['medicine']
        })
    else:
        return jsonify({"error": f"No data found for '{disease_name}'."})

if __name__ == "__main__":
    app.run(debug=True)
