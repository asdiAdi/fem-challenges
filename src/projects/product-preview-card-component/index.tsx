import useDocumentTitle from "@/hooks/useDocumentTitle.ts";
import imgProductDesktop from "./images/image-product-desktop.jpg";
import imgProductMobile from "./images/image-product-mobile.jpg";
import iconCart from "./images/icon-cart.svg";
import styles from "./styles.module.scss";
export default function ProductPreviewCardComponent() {
  useDocumentTitle("Product preview card component");

  return (
    <main>
      <div className={styles["card"]}>
        <picture>
          <source media="(min-width: 1440px)" srcSet={imgProductDesktop} />
          <img
            src={imgProductMobile}
            alt="perfume"
            className={styles["card__picture"]}
          />
        </picture>
        <div className={styles["card__body"]}>
          <div className={styles["card__label"]}>PERFUME</div>
          <h1 className={styles["card__title"]}>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className={styles["card__text"]}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className={styles["card__price"]}>
            <span className={styles["card__price__current"]}>$149.99</span>
            <span className={styles["card__price__before"]}>$169.99</span>
          </div>
          <button className={styles["card__button"]}>
            <img src={iconCart} alt="icon-cart" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </main>
  );
}
