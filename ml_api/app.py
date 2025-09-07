from flask import Flask, request, jsonify, render_template
import pandas as pd
import os

# ----------------------------
# Setup paths
# ----------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Templates and static folders
TEMPLATE_DIR = os.path.join(BASE_DIR, "templates")
STATIC_DIR = os.path.join(BASE_DIR, "static")

# CSV dataset path (one level above ml_api)
DATA_PATH = os.path.join(BASE_DIR, "..", "disease_dataset.csv")

# ----------------------------
# Initialize Flask app
# ----------------------------
app = Flask(__name__, template_folder=TEMPLATE_DIR, static_folder=STATIC_DIR)

# ----------------------------
# Load dataset and preprocess
# ----------------------------
try:
    df = pd.read_csv(DATA_PATH)
except FileNotFoundError:
    raise FileNotFoundError(f"Cannot find CSV at {DATA_PATH}. Please check the path.")

# Convert dataset into dictionary for fast lookup
disease_db = {}
for _, row in df.iterrows():
    key = str(row["symptom"]).strip().lower()
    disease_db[key] = {
        "disease": str(row.get("disease", "")),
        "medicine": str(row.get("medicine", "")),
        "remedies": str(row.get("remedies", ""))
    }

# ----------------------------
# Routes
# ----------------------------
@app.route("/")
def index():
    """Render chatbot UI."""
    return render_template("index.html")


@app.route("/get_disease_info", methods=["POST"])
def get_disease_info():
    """Return disease info for given symptom query."""
    try:
        data = request.get_json()
        query = data.get("query", "").strip().lower()

        found = None
        # Exact match
        if query in disease_db:
            found = disease_db[query]
        else:
            # Check if any symptom keyword is in query
            for key in disease_db:
                if key in query:
                    found = disease_db[key]
                    break

        if found:
            return jsonify({
                "found": True,
                "disease": found["disease"],
                "medicine": found["medicine"],
                "remedies": found["remedies"]
            })
        else:
            return jsonify({"found": False})

    except Exception as e:
        return jsonify({"error": str(e)})


# ----------------------------
# Run app
# ----------------------------
if __name__ == "__main__":
    app.run(debug=True)
