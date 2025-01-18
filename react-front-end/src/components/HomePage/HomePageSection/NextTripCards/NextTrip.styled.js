import styled from "styled-components";

export const NextTripContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;
  width: 1280px;
  height: 536px;

  .next-trip-header {
    width: 1280px;
    height: 44px;
  }

  .next-trip-header > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .next-trip-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 1280px;
    height: 444px;
  }

  .city-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 324px;
    height: 444px;
    border-radius: 8px;
    cursor: pointer;
  }

  .city-card-img-1 {
    width: 324px;
    height: 200px;
    background: url(https://th.bing.com/th/id/R.6d0f335532139a52befef75573966c64?rik=8ood1eCigvuvYg&riu=http%3a%2f%2fd2qk001qea2413.cloudfront.net%2ftsogosun.com-146798522%2fcms%2fcache%2f1680x942%2f51%2f1009-5128d3f32c0b328a769157c4896beebc.jpg&ehk=8CPUojgY8gVrfZ7s2qK2HK%2bZUpwFZCRBI%2fMZ59XEuQc%3d&risl=&pid=ImgRaw&r=0);
    background-size: cover;
    border-radius: 8px 8px 0px 0px;
  }
  .city-card-img-2 {
    width: 324px;
    height: 200px;
    background: url(https://cf.bstatic.com/xdata/images/hotel/max1024x768/407453541.jpg?k=443a8263f37c680001250c37641b36d5ebb4da73047128d31617734bd941f5df&o=&hp=1);
    background-size: cover;
    border-radius: 8px 8px 0px 0px;
  }
  .city-card-img-3 {
    width: 324px;
    height: 200px;
    background: url(https://th.bing.com/th/id/R.0e6108107dbca19d7fef5d74e3a2f0df?rik=0D9%2fp2IuYeBN7Q&riu=http%3a%2f%2fres.cloudinary.com%2fdkd5dyaua%2fimage%2fupload%2fc_scale%2cq_auto%3alow%2cw_700%2fv1494868715%2fExterior_back_-_night2_e6xerm.jpg&ehk=%2buJ%2bnklF13RprhhNOhe%2bcVr5%2frMpfkW1ENSVTQk4Fzs%3d&risl=&pid=ImgRaw&r=0);
    background-size: cover;
    border-radius: 8px 8px 0px 0px;
  }
  .city-card-img-4 {
    width: 324px;
    height: 200px;
    background: url(https://www.south-african-hotels.com/media/OnomoHotelDurban_2.jpg);
    background-size: cover;
    border-radius: 8px 8px 0px 0px;
  }

  .city-card-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 16px 96px;
    gap: 8px;
    width: 324px;
    height: 244px;
    background: #cc2d4a;
    border-radius: 0px 0px 8px 8px;
  }

  .card-2 {
    background: #bc1a6e;
  }

  .card-3 {
    background: #de3151;
  }

  .card-4 {
    background: #d93b30;
  }

  .card-title {
    width: 292px;
    height: 88px;
  }

  .card-title > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .card-subtitle {
    width: 292px;
    height: 28px;
  }

  .card-subtitle {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
`;
