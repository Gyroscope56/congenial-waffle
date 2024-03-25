import numpy as np
import matplotlib.pyplot as plt
import keras
import pandas as pd
from keras.datasets import cifar10
from keras.utils import to_categorical
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D, Dense, Flatten, Dropout
from keras import layers
import os
from PIL import Image

'''
data = pd.read_csv("icml_face_data.csv")


def parse_data(data):
    image_array = np.zeros(shape=(len(data), 48, 48, 1))
    image_label = np.array(list(map(int, data['emotion'])))

    for i, row in enumerate(data.index):
        image = np.fromstring(data.loc[row, ' pixels'], dtype=int, sep=' ')
        image = np.reshape(image, (48, 48, 1))
        image_array[i] = image

    return image_array, image_label


# Splitting the data into train, validation and testing set thanks to Usage column
train_imgs, train_lbls = parse_data(data[data[" Usage"] == "Training"])
val_imgs, val_lbls = parse_data(data[data[" Usage"] == "PrivateTest"])
test_imgs, test_lbls = parse_data(data[data[" Usage"] == "PublicTest"])




print(train_imgs.shape, train_lbls.shape)
print(val_imgs.shape, val_lbls.shape)
print(test_imgs.shape, test_lbls.shape)

model = keras.Sequential([
    Conv2D(16, (3, 3), activation='relu', input_shape=(48, 48, 1)),
    MaxPooling2D((2, 2)),
    Conv2D(32, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(7, activation='softmax')
])
model.summary()

model.compile(loss=keras.losses.SparseCategoricalCrossentropy(),
                  optimizer=keras.optimizers.Adam(),
                  metrics=['accuracy'])

history = model.fit(train_imgs, train_lbls, epochs=3, batch_size=32, validation_split=0.2, verbose=0)
model.save('classifier1.keras')

'''

'''
train_data = df[df[' Usage'] == 'Training']
test_data = df[df[' Usage'] == 'PublicTest']
val_data = df[df[' Usage'] == 'PrivateTest']

df[' pixels'] = df[' pixels'].apply(lambda x: string2array(x))
x_train = train_data[' pixels']

print(x_train.shape)
x_train = np.stack(x_train, axis = 0)
x_train = x_train.reshape(28709, 48, 48, 1)

y_train = to_categorical(train_data['emotion'])

x_test = test_data[' pixels']
x_test = np.stack(x_test, axis = 0)
x_test = x_test.reshape(3589 , 48, 48, 1)

y_test = to_categorical(test_data['emotion'])

x_val = val_data[' pixels']
x_val = np.stack(x_val, axis = 0)
x_val = x_val.reshape(3589 , 48, 48, 1)

y_val = to_categorical(val_data['emotion'])

print(x_train.shape, y_train.shape)
print(x_test.shape, y_test.shape)
print(x_val.shape, y_val.shape)
'''

'''
model = Sequential()
model.add(Conv2D(48, (3, 3), activation="relu", input_shape=(48, 48, 1)))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))

model.add(Conv2D(96, (3, 3), activation="relu"))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))

model.add(Conv2D(96, (3, 3), activation="relu"))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))

model.add(Flatten())
model.add(Dense(96, activation="relu"))
model.add(Dropout(0.5))
model.add(Dense(10, activation="softmax"))

model.summary()

model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])

history = model.fit(x_train, y_train, batch_size=64, epochs=25, validation_data=(x_test, y_test))
model.save('classifier.keras')

'''

# (0=Angry, 1=Disgust, 2=Fear, 3=Happy, 4=Sad, 5=Surprise, 6=Neutral).

def predict(img):
    classes = ["Angry", "Disgust", "Fear", "Happy", "Sad", "Surprise", "Neutral"]
    comments = ["Feeling angry? Take a deep breath and step back. Find a positive outlet for your emotions like talking to a friend or taking a walk. Practice empathy and consider the other person's perspective. Adding a touch of humor can lighten the mood. Remember, every challenge offers an opportunity for growth. Choose to respond with kindness and understanding, fostering harmony and connection. Here is a joke: What do you call fake spaghetti? An impasta!", 
                "Feeling disgusted? Acknowledge your emotions without judgment, then shift your focus to something positive. Engage in self-care activities like listening to music or going for a walk to find comfort. Remember, emotions are temporary, and seeking support from trusted friends or professionals can help you navigate through this feeling with confidence.", 
                "Congratulations on acknowledging your fears! To overcome them, start by gradually facing them head-on and challenging any negative thoughts. Practice relaxation techniques like deep breathing and seek support from loved ones or a therapist. Visualize success and focus on taking small, manageable steps towards your goals. Remember, you're not alone in this journey, and every step forward is a victory. Keep pushing yourself, and you'll find the courage to conquer your fears.", 
                "Congratulations on finding happiness! Your journey to this joyful moment is truly inspiring. May this happiness be just the beginning of many more beautiful moments ahead. Wishing you continued success, fulfillment, and laughter as you navigate life's wonderful adventures. Cheers to your well-deserved happiness!", 
                "Amid sadness, find joy in simple pleasures like spending time with loved ones, practicing gratitude, and engaging in acts of kindness. Take care of yourself with rest, exercise, and nourishment, as physical well-being contributes to emotional wellness. By focusing on these direct actions, you can gradually shift towards happiness even during tough times.", 
                "Surprise floods your senses, awakening excitement and curiosity. In this unexpected moment, time pauses, inviting you to embrace the thrill of the unknown. Let the rush of surprise fuel your optimism, reminding you of life's delightful unpredictability.", 
                "Even in neutrality, seek small sources of joy such as trying new activities, connecting with friends, or exploring nature. Cultivate gratitude for everyday moments and practice self-care through relaxation, exercise, and healthy habits. By actively embracing positivity in your daily life, you can elevate your mood and find contentment in the midst of neutrality."]
    model = keras.models.load_model('classifier1.keras')

    i = Image.open(img).convert('L')

    i = i.resize((48, 48), resample=Image.NEAREST)
    imagedata = np.asarray(i)
    imagedata = imagedata.reshape((1, 48, 48, 1))
    prediction = model.predict(imagedata)
    return [classes[np.argmax(prediction)], comments[np.argmax(prediction)]]

