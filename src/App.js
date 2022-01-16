function App() {
  return (
    <body>
      <div class="container-fluid">
        <div class="jumbotron img_banner_hpbd">
          <div class="text-center text-danger bg-danger">
            <h1>TO: NGUYEN DUONG THUY DANG</h1>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row ">
          <div class="col-xs-4 col-md-4 col-sm-4">
            <p style="padding-top: 5px"></p>
            <span class="text-capitalize text-right bottom-align-text" />

            <p></p>
          </div>
          <div id="bond" class="col-xs-8 col-md-8 col-sm-8 text-center">
            <img
              data-toggle="modal"
              data-target="#myModal"
              class="media-object img-responsive img-thumbnail bg-snow-tranparent-hidden"
              src="img/Winter happy birthday.jpg"
              alt="80x80px"
              style="height: 360px"
            />
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title text-info" id="myModalLabel">
                Thiệp sinh nhật
              </h4>
            </div>
            <div class="modal-body">
              <div class="containeri">
                <img
                  class="img img-responsive"
                  src="img/Winter happy birthday.jpg"
                  alt="80x80px"
                  style="height: 560px"
                />
                <audio controls autoplay>
                  <source src="ms/hpbd.mp3" type="audio/ogg" />
                  <source src="ms/hppd.mp3" type="audio/mpeg" />
                  <a href="#">hpbd</a>
                </audio>
              </div>
              <h1 class="heading text-danger bg-danger">
                <div class="containeri">
                  <img
                    class="img img-responsive"
                    src="img/Snowmen-and-Sledding-Thank-You-Note.jpg"
                  />
                  <p class="top-right">🥑 Dán Dán 🥑</p>
                  <p class="bottom-right"> being in my life</p>
                  <p class="top-left">Tuổi mới chúc dán nhận đc</p>
                  <p class="and">nhìu sự iu thương nè. ❤</p>
                  <p class="center">Happy birthday to you!</p>
                  <p class="bottom-left">💕 Trungnek 💕</p>
                </div>
              </h1>
              <div class="containeri">
                <img class="img img-responsive" src="img/tntv.jpg" />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer class="container-fluid footer navbar-fixed-bottom">
        <div class="container">
          <div class="row">
            <div class="col-xs-8">
              <p class="text-left">
                💕 Dành cho người đặt biệt nhất 💕 From: Trungnek
              </p>
            </div>
            <div class="col-xs-4"></div>
          </div>
        </div>
      </footer>
      <script src="js/jquery.js"></script>
      <script src="js/bootstrap.js"></script>
      <script src="js/snowstorm-min.js"></script>
      <script src="js/js01.js"></script>
    </body>
  );
}

export default App;
