<template>
    <div>
        <article class="message">
            <span class="question-num">46</span>
            <div class="message-body">
                <div v-model="condition">Find all the values of the parameter $a$ for each of them equation $$x^4+(a-3)^2= |x-a+3|+|x+a-3|$$ either has a unique solution, or no solutions.</div>
                <vue-mathjax :formula="condition"></vue-mathjax>
                <b-field label="Your answer" label-position="on-border">
                    <b-input v-model="answer" maxlength="2000" type="textarea"></b-input>
                </b-field>
                <div>Answer preview:</div>
                <vue-mathjax :formula="answer"></vue-mathjax>
            </div>

            <footer class="card-footer">
                <a href="#" class="card-footer-item">Answer</a>
                <a href="#" class="card-footer-item">Give up</a>
            </footer>
        </article>
        <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
            <a class="pagination-previous">Previous</a>
            <a class="pagination-next">Next question</a>
            <ul class="pagination-list">
                <li><a class="pagination-link" aria-label="Goto question 1">1</a></li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li><a class="pagination-link" aria-label="Goto question 45">45</a></li>
                <li><a class="pagination-link is-current" aria-label="Question 46" aria-current="page">46</a></li>
                <li><a class="pagination-link" aria-label="Goto question 47">47</a></li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li><a class="pagination-link" aria-label="Goto question 86">86</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import { VueMathjax } from 'vue-mathjax'
    export default {
        components: {
            'vue-mathjax': VueMathjax
        },
        name: "TaskView",
        data(){
            return {
                condition: "",
                answer: ""
            }
        }
    }
</script>

<style scoped lang="scss">
    .pagination {
        a {
            background: whitesmoke;
        }

        .pagination-list {
            list-style: none;
            margin-left: 35px;

            li a{
                background: whitesmoke;

                &.is-current {
                    background: #7957d5;
                    border-color: whitesmoke;
                }
            }
        }
    }

    .message {
        color: #4a4a4a;
        position: relative;
        margin-left: 35px;

        .card-footer {
            border-top: 3px solid #dbdbdb;

            .card-footer-item:not(:last-child) {
                border-right: 3px solid #dbdbdb;
            }
        }

        .message-body {
            padding-left: 45px;

            .field {
                margin-top: 20px;
            }
        }

        .question-num {
            position: absolute;
            font-weight: 900;
            border: 3px solid #dbdbdb;
            background: whitesmoke;
            max-width: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 70px;
            height: 70px;
            left: -35px;
            top: calc(50% - 35px);
            font-size: 28px;
            border-radius: 50%;
        }
    }
</style>
