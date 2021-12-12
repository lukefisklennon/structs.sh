/* -------------------------------------------------------------------------- */
/*                        Swagger Documentation Schemas                       */
/* -------------------------------------------------------------------------- */
// This file contains all the schema definitions you see on autogenerated Swagger docs.
// These schemas are reusable in documentation through the `$ref` operator (you'll see
// them around in the OpenAPI docs for the route handlers).
// These schemas were written based off the data models diagram.

/* ---------------------------------- User ---------------------------------- */
/**
 * This is the schema definition for a User object. This will appear in the auto-generated
 * Swagger documentation and can be referenced in the documentation for endpoints with the path:
 *     '#/components/schemas/Quiz'
 *
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              username:
 *                  type: string
 *                  description: A unique public-facing name.
 *              email:
 *                  type: string
 *                  description: The email address associated with this user's account.
 *              password:
 *                  type: string
 *                  description: The encrypted/hashed password for this account.
 */

/* ---------------------------------- Topic --------------------------------- */
/**
 * @swagger
 * components:
 *  schemas:
 *      Topic:
 *          type: object
 *          properties:
 *              title:
 *                  type: string
 *              description:
 *                  type: string
 *              courses:
 *                  type: array
 *                  items:
 *                      type: string
 *              videos:
 *                  type: array
 *                  items:
 *                      type: string
 *              sourceCodeIds:
 *                  type: array
 *                  items:
 *                      type: string
 *              image:
 *                  type: string
 */

/* --------------------------------- Lesson --------------------------------- */
/**
 * @swagger
 * components:
 *  schemas:
 *      Lesson:
 *          type: object
 *          required:
 *              - rawMarkdown
 *              - creatorId
 *              - quizzes
 *          properties:
 *              topicId:
 *                  type: string
 *                  description: ID of the topic this lesson is for.
 *              title:
 *                  type: string
 *                  description: Title of the lesson
 *              rawMarkdown:
 *                  type: string
 *                  description: The raw markdown source code used to display the content in this lesson.
 *              creatorId:
 *                  type: string
 *                  description: The ID of the user who created this lesson.
 *              quizzes:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Quiz'
 */

/* ---------------------------------- Quiz ---------------------------------- */
/**
 * @swagger
 * components:
 *  schemas:
 *      MultipleChoiceQuiz:
 *          type: object
 *          properties:
 *              type:
 *                  type: string
 *                  description: The type of the quiz. Eg. 'mc' for multiple choice, 'qa' for question-answer
 *              question:
 *                  type: string
 *                  description: A title for the question or the question itself. Eg. 'what is a linked list?'
 *              description:
 *                  type: string
 *                  description: Raw markdown source code for elaborating on the question or providing supplementary information. Eg. 'Consider the following code snippet...'
 *              answers:
 *                  type: array
 *                  items:
 *                      type: boolean
 *              choices:
 *                  type: array
 *                  items:
 *                      type: string
 *              maxSelections:
 *                  type: number
 *                  description: The maximum number of answers that can be picked. For most question this will be 1, for 'select all that apply' questions, then this will be the length of the available quizzes
 *              correctMessage:
 *                  type: string
 *                  description: Markdown message to display when the quiz question is correctly answered.
 *              incorrectMessage:
 *                  type: string
 *                  description: Markdown message to display when the quiz question is incorrectly answered.
 *              explanation:
 *                  type: string
 *                  description: Markdown message to display when the quiz question has been attempted to give more context and explain the correct answer.
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      TrueFalseQuiz:
 *          type: object
 *          properties:
 *              type:
 *                  type: string
 *                  description: The type of the quiz. Eg. 'mc' for multiple choice, 'qa' for question-answer
 *              question:
 *                  type: string
 *                  description: A title for the question or the question itself. Eg. 'what is a linked list?'
 *              description:
 *                  type: string
 *                  description: Raw markdown source code for elaborating on the question or providing supplementary information. Eg. 'Consider the following code snippet...'
 *              isTrue:
 *                  type: boolean
 *                  description: Whether the answer is T or F.
 *              correctMessage:
 *                  type: string
 *                  description: Markdown message to display when the quiz question is correctly answered.
 *              incorrectMessage:
 *                  type: string
 *                  description: Markdown message to display when the quiz question is incorrectly answered.
 *              explanation:
 *                  type: string
 *                  description: Markdown message to display when the quiz question has been attempted to give more context and explain the correct answer.
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      QuestionAnswerQuiz:
 *          type: object
 *          properties:
 *              type:
 *                  type: string
 *                  description: The type of the quiz. Eg. 'mc' for multiple choice, 'qa' for question-answer
 *              question:
 *                  type: string
 *                  description: A title for the question or the question itself. Eg. 'what is a linked list?'
 *              description:
 *                  type: string
 *                  description: Raw markdown source code for elaborating on the question or providing supplementary information. Eg. 'Consider the following code snippet...'
 *              explanation:
 *                  type: string
 *                  description: Markdown message to display when the quiz question has been attempted to give more context and explain the correct answer.
 */

/* ------------------------------- Source Code ------------------------------ */
/**
 * @swagger
 * components:
 *  schemas:
 *      SourceCode:
 *          type: object
 *          properties:
 *              title:
 *                  type: string
 *              code:
 *                  type: string
 *              topicId:
 *                  type: string
 */