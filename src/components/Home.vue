<template>

    <div class="home">

        <section class="home-text">
            <h4>Hello there</h4>
            <h1>Uğur Yüce</h1>
            <TypeEffect></TypeEffect>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque dolor dolores esse natus necessitatibus provident quam quas rem.</p>
            <div class="home-text-button">
                <button class="btn btn-dark">Button 1</button>
                <button class="btn btn-dark">Button 2</button>
            </div>
        </section>

        <section class="home-image">
            <img src="img/den-2.png">
        </section>

    </div>

</template>



<script>

    import TypeEffect from "./TypeEffect";

    export default {
        components : {
            TypeEffect
        }
    }

</script>



<style lang="scss">
    .home {
        background-color: #eaedf2;
        margin-left: 95px;
        width: calc(100% - 95px);
        height: 100vh;
        display: flex;




        &-text {
            width: calc(55% - 125px);
            margin-left: 125px;
            height: 100vh;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            & h4 {
                padding-bottom: 10px;
            }

            & h1 {
                padding-bottom: 10px;
                font-size: 55px;
                font-weight: bold;
            }

            & p {
                letter-spacing: 0.8px;
                opacity: 0.8;
                padding-bottom: 20px;
            }

            &-button {

                & button {
                    margin-right: 10px;
                }
            }
         }



        &-image {
            width: 45%;
            height: 100vh;
            background-color: transparent;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-end;



            & img {
                width: auto;
                width: 100%;
                height: auto;

            }
        }




    }

</style>