<template>
    <div>
        <article class="message">
            <span class="question-num">46</span>
            <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                quis
                placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
                dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec
                sodales,
                arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui
                urna,
                vehicula et sem eget, facilisis sodales sem.

                <b-field label="Your answer" label-position="on-border">
                    <b-input maxlength="200" type="textarea"></b-input>
                </b-field>
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
    export default {
        name: "TaskView"
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
