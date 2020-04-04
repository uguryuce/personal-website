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
        justify-content: center;
        align-items: center;

        &-image {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            flex-direction: row;
            align-items: flex-start;
            margin-left: 7.5%;
            padding-top: 75px;
            width: 42.5%;
            height: 100vh;
            background-color: transparent;

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
                    width: 7.5%;
                    height: 32.5%;
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
                        width: 35px;
                        height: 35px;
                        background-color: #d98324;
                        border-radius: 3px;

                        & i {
                            color: white;
                            font-size: 20px;
                        }
                    }
                }

                & img {
                    width: 70%;
                    border: 10px solid white;
                    border-radius: 5px;
                    top: 0;
                    left: 0;
                    position: absolute;
                    z-index: 0;
                    background-color: #e3e3e3;

                }

            }
        }

        &-text {
            display: flex;
            width: 50%;
            height: 100vh;
            background-color: transparent;
        }
    }

</style>