import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
import seaborn as sns
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import classification_report
import pickle





df = pd.read_csv('Emotion_classify_Data.csv')

vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(df['Comment'])

with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

def predict2(text):
    options = ["Angry", "Happy", "Scared"]
    text_options = ["Feeling angry? Take a deep breath and step back. Find a positive outlet for your emotions like talking to a friend or taking a walk. Practice empathy and consider the other person's perspective. Adding a touch of humor can lighten the mood. Remember, every challenge offers an opportunity for growth. Choose to respond with kindness and understanding, fostering harmony and connection. Here is a joke: What do you call fake spaghetti? An impasta!",
"Congratulations on finding happiness! Your journey to this joyful moment is truly inspiring. May this happiness be just the beginning of many more beautiful moments ahead. Wishing you continued success, fulfillment, and laughter as you navigate life's wonderful adventures. Cheers to your well-deserved happiness!", "Congratulations on acknowledging your fears! To overcome them, start by gradually facing them head-on and challenging any negative thoughts. Practice relaxation techniques like deep breathing and seek support from loved ones or a therapist. Visualize success and focus on taking small, manageable steps towards your goals. Remember, you're not alone in this journey, and every step forward is a victory. Keep pushing yourself, and you'll find the courage to conquer your fears."]
    txt = vectorizer.transform([text])
    prediction = model.predict(txt)
    return [options[prediction[0]], text_options[prediction[0]]]

#print(predict("i am not afraid of the dark i am afraid of whats in the dark that i cannot see"))

'''
X = vectorizer.fit_transform(df['Comment'])

def transform_text(text):
    return vectorizer.transform(text)

emotion_mapping = {'anger': 0, 'joy': 1, 'fear': 2}
df['emotion'] = df['Emotion'].map(emotion_mapping)
X_train, X_test, y_train, y_test = train_test_split(X, df['emotion'], test_size=0.2, random_state=42, shuffle = False)

nb = MultinomialNB()
nb.fit(X_train, y_train)
y_pred_nb = nb.predict(X_test)
#with open('model.pkl','wb') as f:
    #pickle.dump(nb,f)
print(classification_report(y_test, y_pred_nb))
print(nb.predict(transform_text(["spiders really creep me out"])))
'''






'''
cm = confusion_matrix(y_test, y_pred_nb)
plt.figure(figsize=(6, 4))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', cbar=False)
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.title('Confusion Matrix')
plt.show()
'''