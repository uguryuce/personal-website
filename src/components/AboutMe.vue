<template>

    <div class="about-me">


        <div class="about-me-image">

            <div class="about-me-image-title">
                <h1><span>Ab</span>out Me</h1>
                <h3>Frontend Developer in Turkey</h3>
            </div>
            
        

            <div class="about-me-image-img">
                <div class="about-me-image-img-div">
                    <div class="about-me-image-img-div-box">
                        <i class="fa fa-github"></i>
                    </div>
                    <div class="about-me-image-img-div-box">
                        <i class="fa fa-linkedin"></i>
                    </div>
                    <div class="about-me-image-img-div-box">
                        <i class="fa fa-twitter"></i>
                    </div>
                </div>
                <img src="img/cv123.png">
            </div>

        </div>



        <div class="about-me-text">
            <h1>I am Ugur Yuce</h1>
            <h4><span class="about-me-text-span">Frontend</span>&nbsp;Developer in <span class="about-me-text-span">&nbsp;Turkey</span></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, dolore doloribus ipsa modi odio, porro quo quos ratione rerum sapiente soluta veritatis vitae.</p>
            <div class="about-me-text-detail">

                <div class="about-me-text-detail-block">
                    <div class="about-me-text-detail-block-h3">
                        <h3>Birthday</h3>
                        <h3>Age</h3>
                        <h3>Address</h3>
                    </div>
                    <div class="about-me-text-detail-block-p">
                        <h3>9th April 1998</h3>
                        <h3>22 Yr</h3>
                        <h3>Kocaeli, Turkey</h3>
                    </div>
                </div>


                <div class="about-me-text-detail-block">
                    <div class="about-me-text-detail-block-h3">
                        <h3>University</h3>
                        <h3>Phone</h3>
                        <h3>Freelance</h3>
                    </div>
                    <div class="about-me-text-detail-block-p">
                        <h3>Ataturk</h3>
                        <h3>534-282-2949</h3>
                        <h3>Available</h3>
                    </div>
                </div>

            </div>

            <button class="btn about-me-text-button">
                Download CV
            </button>
        </div>

    </div>
</template>


<script>

</script>



<style lang="scss">
    .about-me {
        background-color: #eaedf2;
        margin-left: 95px;
        width: calc(100% - 95px);
        height: 100vh;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;

        &-image {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            flex-direction: row;
            align-items: flex-start;
            margin-left: 9%;
            padding-top: 75px;
            width: 31%;
            height: 100vh;

            &-title {
                width: 100%;
                height: auto;
                background-color: transparent;

                & h1 {
                    text-transform: uppercase;
                    font-weight: 800;
                    font-size: 32px;
                    margin-bottom: 20px;
                    height: 60px;
                    display: block;

                    & span {
                        border-bottom: 2px solid #d9832e;
                        margin-top: 10px;
                        display: inline-block;
                        height: 50px;
                    }
                }

                & h3 {
                    font-size: 14px;
                    text-transform: uppercase;
                    font-weight: 300;
                    letter-spacing: 2px;
                }

            }

            &-img {
                height: 60%;
                width:100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: flex-start;
                position: relative;
                top: 0;
                left: 0;

                &-div {
                    width: 9%;
                    height: 27.5%;
                    background-color: white;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: flex-start;
                    position: absolute;
                    top: 30px;
                    left: 10px;
                    z-index: 1;

                    &-box {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 30px;
                        height: 30px;
                        background-color: #d98324;
                        border-radius: 0px;

                        & i {
                            color: white;
                            font-size: 1em;
                        }
                    }
                }

                & img {
                    width: 85%;
                    border: 10px solid white;
                    border-radius: 5px;
                    top: 0;
                    left: 0;
                    position: absolute;
                    z-index: 0;
                    background-color: #f1f1f1;
                    -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
                    -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
                    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);

                }

            }
        }



        &-text {
            display: flex;
            width: 60%;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            height: 100vh;
            background-color: transparent;
            padding-top: 80px;

            &-span {
                color: #d9832e;
            }

            &-button {
                background-color: #d9832e;
                text-transform: uppercase;
                color: white;
                font-size: 14px;
                font-weight: 600;
                border-radius: 0px;
                padding: 10px 20px;
            }

            & h1 {
                display: flex;
                font-size: 30px;
                font-weight: 600;
                width: 100%;
                height: auto;
            }

            & h4 {
                margin-top: 0px;
                padding-top: 0px;
                font-size: 18px;
                font-weight: 300;
                letter-spacing: 2px;
                display: flex;
                width: 100%;
            }

            & p {
                font-size: 16px;
                letter-spacing: 0px;
                font-weight: 300;
                letter-spacing: .2px;
                padding-top: 12.5px;
                display: flex;
                width: 80%;
            }

            &-detail {
                width: 100%;
                height: auto;
                padding-top: 15px;
                padding-bottom: 15px;
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;

                &-block {
                    width: 45%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: start;
                    align-items: center;

                    &-h3 {
                        width: 30%;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;

                        & h3 {
                            height: 24px;
                            font-size: 14px;
                            width: 100%;
                            font-weight: 600;
                            display: block;
                            color: rgba(0,0,0,0.5);
                        }

                    }

                    &-p {
                        width: 70%;
                        display: flex;
                        flex-direction: column;
                        justify-content: start;
                        flex-wrap: wrap;
                        flex-direction: row;
                        align-items: center;

                        & h3 {
                            border-left: 2px solid rgba(0,0,0,0.3);
                            height: 24px;
                            font-size: 14px;
                            padding-left: 10%;
                            width: calc(80% - 2px);
                            font-weight: 300;
                            display: block;
                            color: rgba(0,0,0,0.9);
                        }
                    }
                }
            }
        }
    }

</style>