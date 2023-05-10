import s from "./style.module.css";

const Logo = ({ title, subtitle, img }) => {
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src={img} alt="Logo" />
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </>
  );
};

export default Logo;
