const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "Escolha o que mais te agrada:",
        answers: [
            {
                text: "Sala-1",
                image: "https://i.pinimg.com/474x/1f/81/86/1f818687e14a3f6913bad59ec5799aff.jpg",
                alt: "Foto do LOCAL",
                credit: "Fulano"
            },
            {
                text: "Sala-2",
                image: "https://i.pinimg.com/474x/f8/e4/14/f8e414e578b48911a5ae32c1bd266f2c.jpg",
                alt: "Foto do LOCAL",
                credit: "Fulano"
            },
            {
                text: "Sala-3",
                image: "https://i.pinimg.com/474x/e7/15/76/e71576c72f7dca2118f6bf9fc28dea3c.jpg",
                alt: "Foto do LOCAL",
                credit: "Fulano"
            },
            {
                text: "Sala-4",
                image: "https://i.pinimg.com/474x/fd/c4/de/fdc4dea2abd1bd19773711d62294563f.jpg",
                alt: "Foto do LOCAL",
                credit: "Fulano"
            },
        ]
    },
    {
        id: 1,
        text: "Escolha o que mais te agrada:",
        answers: [
            {
                text: "Cozinha-1",
                image: "https://i.pinimg.com/474x/36/87/5c/36875c7e3b5537a8575e1e67705fed4c.jpg",
                alt: "Foto do LOCAL",
                credit: "Fulano"
            },
            {
                text: "Cozinha-2",
                image: "https://i.pinimg.com/474x/48/1b/28/481b28a31028c2a7935d13dafbce1e8a.jpg",
                alt: "Foto do LOCAL",
                credit: "Fulano"
            },
            {
                text: "Cozinha-3",
                image: "https://i.pinimg.com/474x/ac/8c/05/ac8c056c72f8ecc592674d467ab6fc65.jpg",
                alt: "Foto do LOCAL",
                credit: "Fulano"
            },
            {
                text: "Cozinha-4",
                image: "https://i.pinimg.com/474x/c5/b0/ae/c5b0ae56f82c2c440bfa8a5c2a00398a.jpg",
                alt: "Foto do LOCAL",
                credit: "Fulano"
            },
        ]
    },
    {
        id: 2,
        text: "Escolha o que mais te agrada:",
        answers: [
            {
                text: "Setup-1",
                image: "https://i.pinimg.com/474x/31/49/2b/31492bcd0ea7929868040ad6452e7f85.jpg",
                alt: "Foto do LOCAL",
                credit: "Fulano"
            },
            {
                text: "Setup-2",
                image: "https://i.pinimg.com/474x/11/ae/62/11ae62594f69109435834299b2656351.jpg",
                alt: "Foto do LOCAL",
                credit: "Fulano"
            },
            {
                text: "Setup-3",
                image: "https://i.pinimg.com/474x/a3/18/f2/a318f2d055d567cbc158b5cfe5e438a3.jpg",
                alt: "Foto do LOCAL",
                credit: "Fulano"
            },
            {
                text: "Setup-4",
                image: "https://i.pinimg.com/474x/f4/6e/6f/f46e6f1d6b7bb9d9d002b47b7bf2a5a2.jpg",
                alt: "Foto do LOCAL",
                credit: "Fulano"
            },
        ]
    }
]

const answers = [
    {
        combiantion: ["sala-1", "cozinha-1", "Setup-1"],
        text: "Minimalista",
        image: "https://www.nossomeio.com.br/wp-content/uploads/2021/07/9902D05B-201C-42FE-9946-64EE312FC91E.jpeg",
        alt: "Minimalist"
    },
    {
        combiantion: ["sala-2", "cozinha-2", "Setup-2"],
        text: "Street",
        image: "https://i.pinimg.com/474x/36/80/6a/36806a6dba39b1aa2785e3dcc4be6e7d.jpg",
        alt: "Street"
    },
    {
        combiantion: ["sala-3", "cozinha-3", "Setup-3"],
        text: "Rústico",
        image: "https://i.pinimg.com/474x/fb/05/33/fb05330fbe3ecad73d732ca9e6ee15a6.jpg",
        alt: "Rustic"
    },
    {
        combiantion: ["sala-4", "cozinha-4", "Setup-4"],
        text: "Sustentável",
        image: "https://i.pinimg.com/474x/f3/8c/1f/f38c1f63d85b6d86111c131b064e9f5a.jpg",
        alt: "Sustent"
    },
]


const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)

        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + '-questions'
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.image)
            imageLink.textContent = answer.credit
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unslash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)

            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)
        })
        questionDisplay.append(answersBlock)
    })

}

populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if(unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1){
        unansweredQuestions.splice(itemToRemove, 1)
    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock(questionId, chosenAnswer)
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId


    if (!unansweredQuestions.length){
        location.href = '#answer'
        showAnswer()
    }
}

const showAnswer = () => {
    let result
    answers.forEach(answer => {
        if (
            chosenAnswers.includes(answer.combiantion[0]) + 
            chosenAnswers.includes(answer.combiantion[1]) + 
            chosenAnswers.includes(answer.combiantion[2]) 
        ){
            result = answer
        } else if (!result) {
            result = answers[0]
        }
    })




    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block') 
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    answerBlock.append(answerTitle, answerImage)

    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))
}


const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + '-questions')

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText != chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}