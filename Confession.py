from transformers import pipeline
moderation_model=pipeline("text-classification",model="unitary/unbiased-toxic-roberta")
sentiment_model=pipeline("sentiment-analysis",model="nlptown/bert-base-multilingual-uncased-sentiment")
def moderate_confession(text):
    result = moderation_model(text)
    label = result[0]['label']
    score = result[0]['score']
    inappropriate_keywords = [
        "kill",
        "suicide",
        "hurt",
        "harm",
        "attack",
        "murder",
        "torture",
        "self-harm"
    ]
    for keyword in inappropriate_keywords:
        if keyword in text.lower() and score > 0.3:
            return "Inappropriate"

    if (label in ["hate", "violence", "suicidal", "sexual", "toxic"] and score > 0.5):
        return "Inappropriate"



    return "Appropriate"
def analyze_sentiment(text):
    result = sentiment_model(text)
    label = result[0]['label']

    if "positive" in label.lower() or label in ["5 stars", "4 stars"]:
        return "Positive"
    elif "negative" in label.lower() or label in ["1 star", "2 stars"]:
        return "Negative"
    else:
        return "Neutral"
def analyze_confession(text):
    moderation_status = moderate_confession(text)
    sentiment = analyze_sentiment(text)

    return {
        "status": moderation_status,
        "sentiment": sentiment
    }
confession = input()
analysis = analyze_confession(confession)
print(analysis)
