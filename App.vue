<script>
    export default {
        onLaunch: function() {
            console.log('App Launch')
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        }
    }
</script>

<style lang="scss">
    /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
    @import "@/uni_modules/uview-ui/index.scss";

    html {
        font-size: 16px;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }


    #app {
        width: 100vw;
        height: 100vh;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
    }

    .flex-col {
        display: flex;
        flex-direction: column;
    }

    .justify-start {
        justify-content: flex-start;
    }

    .justify-end {
        justify-content: flex-end;
    }

    .justify-center {
        justify-content: center;
    }

    .justify-between {
        justify-content: space-between;
    }

    .justify-around {
        justify-content: space-around;
    }

    .justify-evenly {
        justify-content: space-evenly;
    }

    .items-start {
        align-items: flex-start;
    }

    .items-end {
        align-items: flex-end;
    }

    .items-center {
        align-items: center;
    }

    .items-baseline {
        align-items: baseline;
    }

    .items-stretch {
        align-items: stretch;
    }

    .self-start {
        align-self: flex-start;
    }

    .self-end {
        align-self: flex-end;
    }

    .self-center {
        align-self: center;
    }

    .self-baseline {
        align-self: baseline;
    }

    .self-stretch {
        align-self: stretch;
    }

    .flex-1 {
        flex: 1 1 0%;
    }

    .flex-auto {
        flex: 1 1 auto;
    }

    .grow {
        flex-grow: 1;
    }

    .grow-0 {
        flex-grow: 0;
    }

    .shrink {
        flex-shrink: 1;
    }

    .shrink-0 {
        flex-shrink: 0;
    }

    .relative {
        position: relative;
    }

    /*每个页面公共css */
    .container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
    }

    .container-wrap {
        width: 100%;
        height: 100%;
    }
</style>