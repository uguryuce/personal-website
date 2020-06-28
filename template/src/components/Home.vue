<template>

    <div class="home">

        <section class="home-text">
            <h4>Hello there</h4>
            <h1>Uğur Yüce</h1>
            <TypeEffect></TypeEffect>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque dolor dolores esse natus necessitatibus provident.</p>
            <div class="home-text-button">
                <button class="btn button-dark">Button 1</button>
                <button class="btn button-light">Button 2</button>
            </div>
        </section>

        <!-- <section class="home-border"></section> -->

        <section class="home-image">
        <!-- <img src="img/artdot2.png"> -->
            <div class="home-image-block a1">
                <div class="home-image-block-text">
                    <i class="fa fa-github"></i>
                </div>
                <h3>Github</h3>

            </div>


            <div class="home-image-block a1">
                <div class="home-image-block-text">
                    <i class="fa fa-paper-plane"></i>
                </div>
                <h3>Gmail</h3>

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
        align-items: center;




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

        &-border {
            width: 2px;
            opacity: 0.7;
            margin-left: calc(10% - 3px);
            height: 65vh;
            background-image: linear-gradient(#fbfbfd, #2c3e50, #fbfbfd);
            background-color: #2c3e50;
        }




        &-image {
            margin-left: 15%;
            width: 15%;
            height: 100vh;
            display: flex;
            -webkit-box-shadow: 0px 0px 20px 0px rgba(44,62,80,0.18);
            -moz-box-shadow: 0px 0px 20px 0px rgba(44,62,80,0.18);
            box-shadow: 0px 0px 20px 0px rgba(44,62,80,0.20);
            background-color: #ffffff;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;


            &-block {

                width: 100%;
                height: 25%;
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transition: background-color .6s;


                &:hover {
                    cursor: pointer;

                    .home-image-block-text, .home-image-block-text i  {
                        background-color: black;
                    }

                    .home-image-block h3 {
                        color: black;
                    }

                }

                &-text {
                    width: 55px;
                    height: 55px;
                    opacity: 0.85;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: #2c3e50;
                    border-radius: 50%;
                    margin-bottom: 10px;
                    transition: background-color .6s;

                    & i {
                        font-size: 30px;
                        text-align: center;
                        background-color: #2c3e50;
                        color: white;
                        transition: background-color .6s;
                    }

                }

                & h3 {
                    display: block;
                    width: 100%;
                    padding: 0px;
                    text-align: center;
                    font-size: 18px;
                    font-weight: 400;
                    opacity: 0.8;
                    letter-spacing: .5px;
                    color: #2c3e50;
                    margin-top: 10px;
                    margin-bottom: 0px;
                    transition: color .6s;
                }





            }


            & .a1 {
                //justify-content: flex-start;
                //border-left: 2px solid rgba(44,62,80,0.7);

            }
            & .a2 {
                //justify-content: center;
                //border-left: 2px solid rgba(44,62,80,0.7);
            }
            & .a3 {
                //justify-content: flex-end;
                //border-left: 2px solid rgba(44,62,80,0.7);

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