from openai import OpenAI
s = "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"
client = OpenAI(api_key=s)

chat = client.chat.completions.create(messages=[
    {
    "role":"user",
    "content": "my life sucks",
    }
], model="gpt-3.5-turbo")
print(chat)