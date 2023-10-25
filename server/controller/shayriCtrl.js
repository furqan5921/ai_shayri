const OpenAI = require("openai");

const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const responseGenerator = async (req, res) => {
    try {
        const { topic, category, language } = req.body
        const messages = [
            { role: "system", content: "You are poet, Joker and wise man" },
            { role: "user", content: `${category} about ${topic} in ${language} under 200 characters` }
        ]
        const response = await openAi.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
            max_tokens: 200,
            temperature: 0.7,
            n: 1
        })
        const output = response.choices[0].message.content

        return res.send({ output })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { responseGenerator }