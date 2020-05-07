<template>
    <div class="work">



        <div class="work-title">
            <h1><span>My</span> Work</h1>
            <h3>Frontend Developer in Turkey</h3>
        </div>



        <div class="work-list">

            <div class="work-list-group">
                <div class="work-list-group-item">
                    <img src="/img/ug-heyb.png">
                </div>
                <div class="work-list-group-details">
                    <h3>Github User Information</h3>
                    <p>Interface Design and Development </p>
                </div>
            </div>


            <div class="work-list-group work-list-group-r">
                <div class="work-list-group-item">
                    <img src="/img/github-user.png">
                </div>
                <div class="work-list-group-details work-list-group-r-details-r">
                    <h3>Github User Information</h3>
                    <p>Interface Design and Development </p>
                </div>
            </div>


            <div class="work-list-group">
                <div class="work-list-group-item">
                    <img src="/img/medium1.png">
                </div>
                <div class="work-list-group-details">
                    <h3>Github User Information</h3>
                    <p>Interface Design and Development </p>
                </div>
            </div>


        </div>



    </div>
</template>




<script>

</script>




<style lang="scss">

    .work {
        background-color: #fbfbfd;
        margin-left: 95px;
        width: calc(100% - 95px);
        height: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: start;

        &-title {
            width: 100%;
            height: 25vh;
            background-color: transparent;
            margin-left: 9%;
            padding-top: 75px;

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


        .work-list {
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            margin-top: 5vh;
            margin-bottom: 5vh;
            height: auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            align-items: start;

            &-group {
                margin-top: 10vh;
                width: 100%;
                padding-left: 9%;
                padding-right: 9%;
                height: 40vh;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: center;

                &:first-child {
                    margin-top: 0;
                }

                &-item {
                    display: flex;
                    align-items: center;
                    width: 50%;
                    height: 40vh;

                    img {
                        border-radius: 4px;
                        width: 90%;
                        height: auto;
                        object-fit: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.20);
                        -moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.20);
                        box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.20);
                    }
                }

                &-details {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                    justify-content: center;
                    align-items: start;
                    width: 40%;
                    margin-left: 10%;
                    height: 40vh;
                    padding-top: 90px;

                    h3 {
                        display: block;
                        width: 100%;
                        margin-bottom: 10px;
                        color: #4a4a4a;
                    }

                    p {
                        display: block;
                        width: 100%;
                        margin-top: 5px;
                        color: #4a4a4a;
                    }
                }
            }



            &-group-r {
                flex-direction: row-reverse;

                &-details-r {
                    margin-right: 10%;
                    margin-left: 0;
                }
            }
        }



    }
</style>


