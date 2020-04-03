<template>

    <div class="home">

        <section class="home-text">
            <h4>Hello there</h4>
            <h1>Uğur Yüce</h1>
            <TypeEffect></TypeEffect>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque dolor dolores esse natus necessitatibus provident quam quas rem.</p>
            <div class="home-text-button">
                <button class="btn button-dark">Button 1</button>
                <button class="btn button-light">Button 2</button>
            </div>
        </section>

        <section class="home-image">
        <!-- <img src="img/artdot2.png"> -->
            <div class="home-image-block a1">
                <div class="home-image-block-text">
                    <i class="fa fa-github"></i>
                </div>
                <h3>Github</h3>

            </div>

            <div class="home-image-block a2">
                <div class="home-image-block-text">
                    <i class="fa fa-linkedin"></i>
                </div>
                <h3>Linkedin</h3>

            </div>

            <div class="home-image-block a3">
                <div class="home-image-block-text">
                    <i class="fa fa-twitter"></i>
                </div>
                <h3>Twitter</h3>

            </div>
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
        background-color: #fbfbfd;
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

                & .button-dark {
                    background-color: #d9832e;
                    text-transform: uppercase;
                    color: white;
                    font-size: 14px;
                    font-weight: 600;
                    border-radius: 0px;
                    padding: 10px 20px;
                }

                & .button-light {
                    border: 2px solid #d9832e;
                    color:#d9832e ;
                    text-transform: uppercase;
                    font-size: 14px;
                    font-weight: 600;
                    border-radius: 0px;
                    padding: 10px 20px;
                }
            }
         }


/*
        &-image {
            width: 45%;
            height: 100vh;
            //background-color: #eaedf2;;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: flex-end;




            & img {
                width: auto;
                width: 100%;
                height: auto;

            }
        }
*/

        &-image {
            margin-left: 12.5%;
            width: 17.5%;
            height: 100vh;
            background-color: rgba(255,255,255,0.25);
            display: flex;
            -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.25);
            -moz-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.25);
            box-shadow: 0px 0px 30px 0px rgba(44,62,80,0.12);
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            background-color: #fdfdfd;


            &-block {

                width: 100%;
                height: 33.33%;
                background-color: rgba(255,255,255,0);
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                &:hover {
                    background-color: #ececec;
                    cursor: pointer;
                }

                &-text {
                    width: 60px;
                    height: 60px;
                    opacity: 0.85;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #2c3e50;
                    border-radius: 50%;
                    margin-bottom: 10px;

                    & i {
                        font-size: 30px;
                        text-align: center;
                        background-color: #2c3e50;
                        color: white;


                    }

                }

                & h3 {
                    display: block;
                    width: 100%;
                    padding: 0px;
                    text-align: center;
                    font-size: 18px;
                    font-weight: 100;
                    letter-spacing: 1px;
                    color: #2c3e50;
                    margin-top: 5px;
                }





            }


            & .a1 {

            }
            & .a2 {

            }
            & .a3 {

            }
        }



    }

    @media (min-width: 1500px){
        .home {
            margin-left: 295px;
            width: calc(100% - 295px);
        }

    }

</style>