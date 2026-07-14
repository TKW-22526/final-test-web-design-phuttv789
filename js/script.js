(function () {
  "use strict";

  const PRODUCTS = [
    {
      id: "p1",
      name: "Phantom Strike FG",
      brand: "Nike",
      category: "fg",
      price: 2890000,
      sizes: [39, 40, 41, 42, 43],
      accent: "#FF6B35",
      image: "../assets/phantom2.jpg", 
      short: "Đế đinh nhựa dài, form ôm chân, dành cho sân cỏ tự nhiên.",
      description: "Phantom Strike FG được thiết kế cho những pha bứt tốc trên sân cỏ tự nhiên. Form giày ôm sát cổ chân, thân giày dệt một lớp giúp cảm giác bóng chân thực, đế đinh nhựa dài tăng độ bám khi đổi hướng.",
      specs: {
        "Chất liệu thân giày": "Vải dệt kỹ thuật",
        "Loại đế": "FG — sân cỏ tự nhiên",
        "Trọng lượng": "215g (size 42)",
        "Xuất xứ": "Chính hãng, nhập khẩu",
        "Bảo hành": "6 tháng lỗi kỹ thuật"
      }
    },
    {
      id: "p2",
      name: "Predator Edge TF",
      brand: "Adidas",
      category: "tf",
      price: 2450000,
      sizes: [38, 39, 40, 41, 42, 43],
      accent: "#FF6B35",
      image: "../assets/PredatorEdgeTF.jpg",
      short: "Đế tấm đông đặc chuyên sân cỏ nhân tạo, giảm xóc tối ưu.",
      description: "Predator Edge TF dùng đế tấm đông đặc gồm hàng chục đinh nhỏ, phân bổ lực đều trên mặt sân cỏ nhân tạo. Vùng mũi giày có gân cao su tăng ma sát khi sút bóng xoáy.",
      specs: {
        "Chất liệu thân giày": "Da tổng hợp phủ gân cao su",
        "Loại đế": "TF — sân cỏ nhân tạo",
        "Trọng lượng": "232g (size 42)",
        "Xuất xứ": "Chính hãng, nhập khẩu",
        "Bảo hành": "6 tháng lỗi kỹ thuật"
      }
    },
    {
      id: "p3",
      name: "Future Match IC",
      brand: "Puma",
      category: "ic",
      price: 1890000,
      sizes: [38, 39, 40, 41, 42],
      accent: "#FF6B35",
      image: "../assets/FutureMatchIC.jpg",
      short: "Đế phẳng bám sàn, đệm êm cho futsal và sân bê tông.",
      description: "Future Match IC có đế cao su phẳng bố trí rãnh xoay, hỗ trợ trụ và xoay người linh hoạt trong futsal. Lớp lót giữa đệm êm, giảm áp lực khi di chuyển liên tục trên sàn cứng.",
      specs: {
        "Chất liệu thân giày": "Da microfiber",
        "Loại đế": "IC — futsal / sân trong nhà",
        "Trọng lượng": "245g (size 42)",
        "Xuất xứ": "Chính hãng, nhập khẩu",
        "Bảo hành": "6 tháng lỗi kỹ thuật"
      }
    },
    {
      id: "p4",
      name: "Morelia Neo FG",
      brand: "Mizuno",
      category: "fg",
      price: 2190000,
      sizes: [39, 40, 41, 42, 43, 44],
      accent: "#FF6B35",
      image: "../assets/Morelia Neo FG.jpg",
      short: "Da kangaroo mềm, cảm giác bóng tự nhiên trên sân cỏ thật.",
      description: "Morelia Neo FG giữ chất da kangaroo truyền toughness của Mizuno — mềm ngay từ lần đầu xỏ chân, ôm form tự nhiên theo bàn chân sau vài trận. Đế đinh hỗn hợp cho lực bám ổn định trên cỏ tự nhiên hơi ẩm.",
      specs: {
        "Chất liệu thân giày": "Da Kangaroo thật",
        "Loại đế": "FG — sân cỏ tự nhiên",
        "Trọng lượng": "205g (size 42)",
        "Xuất xứ": "Chính hãng, nhập khẩu",
        "Bảo hành": "6 tháng lỗi kỹ thuật"
      }
    },
    {
      id: "p5",
      name: "Zoom Vapor TF",
      brand: "Nike",
      category: "tf",
      price: 2050000,
      sizes: [39, 40, 41, 42, 43],
      accent: "#FF6B35",
      image: "../assets/Zoom Vapor TF.jpg",
      short: "Nhẹ, tốc độ, đế tấm dày đặc cho sân nhân tạo cỏ ngắn.",
      description: "Zoom Vapor TF ưu tiên sự nhẹ nhàng cho những cầu thủ chạy cánh. Đế tấm đinh dày đặc bám tốt trên cỏ nhân tạo sợi ngắn, mũi giày bo cong giúp xoay trở nhanh trong không gian hẹp.",
      specs: {
        "Chất liệu thân giày": "Vải dệt nhẹ",
        "Loại đế": "TF — sân cỏ nhân tạo",
        "Trọng lượng": "198g (size 42)",
        "Xuất xứ": "Chính hãng, nhập khẩu",
        "Bảo hành": "6 tháng lỗi kỹ thuật"
      }
    },
    {
      id: "p6",
      name: "X Ghosted IC",
      brand: "Adidas",
      category: "ic",
      price: 1690000,
      sizes: [38, 39, 40, 41, 42, 43],
      accent: "#FF6B35",
      image: "../assets/X Ghosted IC.jpg",
      short: "Cổ giày thấp, linh hoạt cho lối chơi futsal tốc độ.",
      description: "X Ghosted IC có cổ giày cắt thấp, trọng tâm nhẹ giúp xoay trở nhanh trong futsal. Đế cao su phẳng chia rãnh nhỏ, tăng độ bám khi dừng đột ngột trên sàn gỗ hoặc sàn nhựa.",
      specs: {
        "Chất liệu thân giày": "Da tổng hợp",
        "Loại đế": "IC — futsal / sân trong nhà",
        "Trọng lượng": "220g (size 42)",
        "Xuất xứ": "Chính hãng, nhập khẩu",
        "Bảo hành": "6 tháng lỗi kỹ thuật"
      }
    },
    {
      id: "p7",
      name: "Copa Pure FG",
      brand: "Adidas",
      category: "fg",
      price: 2690000,
      sizes: [40, 41, 42, 43, 44],
      accent: "#FF6B35",
      image: "../assets/Copa Pure FG.jpg",
      short: "Da mềm cổ điển, kiểm soát bóng tốt trên sân cỏ tự nhiên.",
      description: "Copa Pure FG kế thừa form giày da cổ điển, kiểm soát bóng chính xác nhờ chất da mềm phủ toàn thân. Đế đinh hỗn hợp thích nghi tốt với sân cỏ tự nhiên tiêu chuẩn thi đấu.",
      specs: {
        "Chất liệu thân giày": "Da tổng hợp mềm",
        "Loại đế": "FG — sân cỏ tự nhiên",
        "Trọng lượng": "225g (size 42)",
        "Xuất xứ": "Chính hãng, nhập khẩu",
        "Bảo hành": "6 tháng lỗi kỹ thuật"
      }
    },
    {
      id: "p8",
      name: "Ultra Play TF",
      brand: "Puma",
      category: "tf",
      price: 1590000,
      sizes: [39, 40, 41, 42],
      accent: "#FF6B35",
      image: "../assets/Ultra Play TF.jpg",
      short: "Lựa chọn phổ thông, bền bỉ cho sân cỏ nhân tạo mỗi tuần.",
      description: "Ultra Play TF hướng đến người chơi phong trào, đá sân cỏ nhân tạo đều đặn mỗi tuần. Đế tấm đông đặc bền, thân giày da tổng hợp dễ vệ sinh sau mỗi trận.",
      specs: {
        "Chất liệu thân giày": "Da tổng hợp",
        "Loại đế": "TF — sân cỏ nhân tạo",
        "Trọng lượng": "240g (size 42)",
        "Xuất xứ": "Chính hãng, nhập khẩu",
        "Bảo hành": "6 tháng lỗi kỹ thuật"
      }
    }
  ];

  const CATEGORY_LABEL = { fg: "Sân cỏ tự nhiên", tf: "Sân cỏ nhân tạo", ic: "Futsal / trong nhà" };

  function formatPrice(n) {
    return n.toLocaleString("vi-VN") + "đ";
  }

  /* ---------------- Cart (localStorage) ---------------- */
  const CART_KEY = "dinh_cart_v1";

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
    renderCartPanel();
  }

  function removeFromCart(id, size) {
    const cart = getCart().filter((it) => !(it.id === id && it.size === size));
    saveCart(cart);
  }

  function addToCart(id, size, qty) {
    const cart = getCart();
    const existing = cart.find((it) => it.id === id && it.size === size);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id, size, qty });
    }
    saveCart(cart);
  }

  function updateCartCount() {
    const total = getCart().reduce((sum, it) => sum + it.qty, 0);
    document.querySelectorAll("#cartCount").forEach((el) => {
      el.textContent = total;
    });
  }

  /* ---------------- Cart dropdown panel ---------------- */
  function pathPrefix() {
    // index.html renders #featuredGrid; every other page already lives inside html/
    return document.getElementById("featuredGrid") ? "html/" : "";
  }

  function cartItemRow(item, product) {
    const prefix = pathPrefix();
    const lineTotal = product.price * item.qty;
    return `
      <div class="cart-item">
        <img src="${prefix}${product.image}" alt="${product.name}">
        <div class="cart-item-info">
          <span class="name">${product.name}</span>
          <span class="meta">Size ${item.size} · SL ${item.qty}</span>
          <span class="line-price">${formatPrice(lineTotal)}</span>
        </div>
        <button type="button" class="cart-item-remove" data-id="${item.id}" data-size="${item.size}" aria-label="Xoá sản phẩm">✕</button>
      </div>`;
  }

  function renderCartPanel() {
    const panel = document.getElementById("cartPanel");
    if (!panel) return;
    const prefix = pathPrefix();
    const shopLink = `${prefix}san-pham.html`;
    const cart = getCart().filter((item) => PRODUCTS.some((p) => p.id === item.id));

    if (!cart.length) {
      panel.innerHTML = `
        <h3>Giỏ hàng của bạn</h3>
        <p class="cart-empty">Giỏ hàng đang trống.</p>
        <div class="cart-panel-actions">
          <a href="${shopLink}" class="btn btn-primary btn-block">Xem sản phẩm</a>
        </div>`;
      return;
    }

    const rows = cart
      .map((item) => cartItemRow(item, PRODUCTS.find((p) => p.id === item.id)))
      .join("");
    const total = cart.reduce((sum, item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      return sum + product.price * item.qty;
    }, 0);

    panel.innerHTML = `
      <h3>Giỏ hàng của bạn</h3>
      <div class="cart-items">${rows}</div>
      <div class="cart-panel-total"><span>Tổng cộng</span><span>${formatPrice(total)}</span></div>
      <div class="cart-panel-actions">
        <a href="${shopLink}" class="btn btn-ghost btn-block">Tiếp tục mua sắm</a>
        <button type="button" class="btn btn-primary btn-block" id="checkoutOpenBtn">Thanh toán →</button>
      </div>`;
  }

  function initCart() {
    const btn = document.getElementById("cartBtn");
    const panel = document.getElementById("cartPanel");
    if (!btn || !panel) return;

    renderCartPanel();

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (isOpen) renderCartPanel();
    });

    panel.addEventListener("click", (e) => {
      const removeBtn = e.target.closest(".cart-item-remove");
      if (removeBtn) {
        removeFromCart(removeBtn.dataset.id, removeBtn.dataset.size);
        return;
      }
      const checkoutBtn = e.target.closest("#checkoutOpenBtn");
      if (checkoutBtn) {
        panel.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        openCheckout();
      }
    });

    document.addEventListener("click", (e) => {
      if (!panel.classList.contains("open")) return;
      if (panel.contains(e.target) || btn.contains(e.target)) return;
      panel.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        panel.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------------- Checkout modal ---------------- */
  function buildCheckoutModal() {
    if (document.getElementById("checkoutOverlay")) return;
    document.body.insertAdjacentHTML(
      "beforeend",
      `
      <div class="checkout-overlay" id="checkoutOverlay">
        <div class="checkout-modal">
          <button type="button" class="checkout-close" id="checkoutClose" aria-label="Đóng">✕</button>
          <span class="eyebrow"><span class="stud"></span> Xác nhận đơn hàng</span>
          <h2 style="margin:10px 0 4px;">Thanh toán</h2>
          <p style="color:var(--text-light); font-size:0.88rem; margin:0 0 16px;">Kiểm tra lại đơn hàng và để lại thông tin giao hàng — ĐINH sẽ gọi xác nhận trước khi giao.</p>
          <div class="checkout-summary" id="checkoutSummary"></div>
          <form class="contact-form" id="checkoutForm" novalidate style="margin-top:20px;">
            <div class="field" id="wrap-co-name">
              <label for="co-name">Họ và tên</label>
              <input type="text" id="co-name" name="name">
              <span class="field-error-msg">Vui lòng nhập họ tên của bạn.</span>
            </div>
            <div class="field" id="wrap-co-phone">
              <label for="co-phone">Số điện thoại</label>
              <input type="tel" id="co-phone" name="phone">
              <span class="field-error-msg">Số điện thoại chưa đúng định dạng.</span>
            </div>
            <div class="field" id="wrap-co-address">
              <label for="co-address">Địa chỉ nhận hàng</label>
              <textarea id="co-address" name="address" placeholder="Số nhà, đường, phường/xã, tỉnh/thành..."></textarea>
              <span class="field-error-msg">Vui lòng nhập địa chỉ nhận hàng.</span>
            </div>
            <div class="field">
              <label for="co-note">Ghi chú (không bắt buộc)</label>
              <textarea id="co-note" name="note" placeholder="Ví dụ: giao giờ hành chính, gọi trước khi giao..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Xác nhận đặt hàng</button>
            <p class="form-msg" id="checkoutMsg"></p>
          </form>
        </div>
      </div>`
    );
  }

  function renderCheckoutSummary() {
    const summary = document.getElementById("checkoutSummary");
    if (!summary) return;
    const cart = getCart().filter((item) => PRODUCTS.some((p) => p.id === item.id));
    const rows = cart
      .map((item) => {
        const product = PRODUCTS.find((p) => p.id === item.id);
        return `<div class="checkout-summary-row">
          <span>${product.name} · size ${item.size} × ${item.qty}</span>
          <span>${formatPrice(product.price * item.qty)}</span>
        </div>`;
      })
      .join("");
    const total = cart.reduce((sum, item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      return sum + product.price * item.qty;
    }, 0);
    summary.innerHTML = `${rows}<div class="checkout-summary-row checkout-summary-total"><span>Tổng cộng</span><span>${formatPrice(total)}</span></div>`;
  }

  function openCheckout() {
    const overlay = document.getElementById("checkoutOverlay");
    if (!overlay) return;
    if (!getCart().length) return;
    renderCheckoutSummary();
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    const firstField = document.getElementById("co-name");
    if (firstField) firstField.focus();
  }

  function closeCheckout() {
    const overlay = document.getElementById("checkoutOverlay");
    if (!overlay) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  function initCheckout() {
    buildCheckoutModal();
    const overlay = document.getElementById("checkoutOverlay");
    const closeBtn = document.getElementById("checkoutClose");
    const form = document.getElementById("checkoutForm");
    if (!overlay || !form) return;

    closeBtn.addEventListener("click", closeCheckout);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeCheckout();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("open")) closeCheckout();
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = document.getElementById("checkoutMsg");
      let valid = true;

      const fields = [
        { id: "co-name", check: (v) => v.trim().length > 1 },
        { id: "co-phone", check: (v) => /^[0-9\s+()-]{8,14}$/.test(v.trim()) },
        { id: "co-address", check: (v) => v.trim().length > 5 }
      ];

      fields.forEach(({ id, check }) => {
        const input = document.getElementById(id);
        const wrapper = input.closest(".field");
        if (!check(input.value)) {
          wrapper.classList.add("error");
          valid = false;
        } else {
          wrapper.classList.remove("error");
        }
      });

      if (!valid) {
        msg.classList.remove("show", "ok");
        return;
      }

      msg.textContent = "Cảm ơn bạn! Đơn hàng đã được ghi nhận, ĐINH sẽ gọi xác nhận trong ít phút.";
      msg.classList.add("show", "ok");

      setTimeout(() => {
        saveCart([]);
        form.reset();
        msg.classList.remove("show", "ok");
        closeCheckout();
      }, 1800);
    });
  }

  /* ---------------- Product card markup ---------------- */
  function productCard(p, linkPrefix) {
    return `
      <a class="product-card" href="${linkPrefix}chi-tiet.html?id=${p.id}">
        <div class="product-thumb">
          <span class="thumb-tag">${p.category.toUpperCase()}</span>
          <img src="${linkPrefix}${p.image}" alt="${p.name}">
        </div>
        <div class="product-body">
          <span class="brand-name">${p.brand}</span>
          <h3>${p.name}</h3>
          <p style="color:var(--chalk-dim); font-size:0.86rem; margin:0;">${p.short}</p>
          <div class="product-foot">
            <span class="price">${formatPrice(p.price)}</span>
            <span class="product-link-btn">Chi tiết</span>
          </div>
        </div>
      </a>`;
  }

  /* ---------------- Home: featured grid ---------------- */
  function renderFeatured() {
    const grid = document.getElementById("featuredGrid");
    if (!grid) return;
    const featured = PRODUCTS.slice(0, 4);
    grid.innerHTML = featured.map((p) => productCard(p, "html/")).join("");
  }

  /* ---------------- Product listing page ---------------- */
  function renderProductListing() {
    const grid = document.getElementById("productGrid");
    if (!grid) return;
    const chips = document.querySelectorAll(".filter-chip");
    const emptyMsg = document.getElementById("emptyMsg");

    function draw(filter) {
      const list = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
      grid.innerHTML = list.map((p) => productCard(p, "")).join("");
      if (emptyMsg) emptyMsg.style.display = list.length ? "none" : "block";
    }

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        draw(chip.dataset.filter);
      });
    });

    draw("all");
  }

  /* ---------------- Product detail page ---------------- */
  function renderProductDetail() {
    const root = document.getElementById("productDetailRoot");
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || PRODUCTS[0].id;
    const p = PRODUCTS.find((x) => x.id === id) || PRODUCTS[0];

    document.title = `${p.name} — ĐINH`;

    let selectedSize = null;
    let qty = 1;

    const specsRows = Object.entries(p.specs)
      .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
      .join("");

    const sizeChips = p.sizes
      .map((s) => `<button type="button" class="size-chip" data-size="${s}">${s}</button>`)
      .join("");

    // ĐÃ XÓA KHỐI <div class="detail-thumbs"> TẠI ĐÂY
    root.innerHTML = `
      <div class="product-detail">
        <div class="detail-gallery">
          <div class="detail-hero-thumb">
            <img id="mainProductImg" src="${p.image}" alt="${p.name}">
          </div>
        </div>
        <div class="detail-info">
          <span class="eyebrow"><span class="stud"></span> ${p.brand} · ${CATEGORY_LABEL[p.category]}</span>
          <h1>${p.name}</h1>
          <p class="detail-price price">${formatPrice(p.price)}</p>
          <p class="detail-desc">${p.description}</p>

          <div class="option-block">
            <span class="option-label">Chọn size (EU)</span>
            <div class="size-grid" id="sizeGrid">${sizeChips}</div>
          </div>

          <div class="option-block">
            <span class="option-label">Số lượng</span>
            <div class="qty-row">
              <div class="qty-control">
                <button type="button" id="qtyMinus" aria-label="Giảm số lượng">−</button>
                <span id="qtyValue">1</span>
                <button type="button" id="qtyPlus" aria-label="Tăng số lượng">+</button>
              </div>
            </div>
          </div>

          <div class="detail-actions">
            <button class="btn btn-primary" id="addToCartBtn">Thêm vào giỏ</button>
            <a href="san-pham.html" class="btn btn-ghost">← Quay lại sản phẩm</a>
          </div>
          <p class="form-msg" id="detailMsg">Đã thêm vào giỏ hàng.</p>

          <div class="stud-divider"><span class="stud"></span><span class="stud"></span><span class="stud"></span></div>

          <h3 style="text-transform:none; font-family:var(--font-body); font-size:1.1rem;">Thông số kỹ thuật</h3>
          <table class="spec-table"><tbody>${specsRows}</tbody></table>
        </div>
      </div>`;

    const sizeGrid = document.getElementById("sizeGrid");
    const addBtn = document.getElementById("addToCartBtn");
    const msg = document.getElementById("detailMsg");
    const qtyValue = document.getElementById("qtyValue");

    // ĐÃ XÓA LOGIC CLICK CHỌN ẢNH NHỎ TẠI ĐÂY ĐỂ TRÁNH LỖI

    sizeGrid.addEventListener("click", (e) => {
      const btn = e.target.closest(".size-chip");
      if (!btn) return;
      sizeGrid.querySelectorAll(".size-chip").forEach((c) => c.classList.remove("selected"));
      btn.classList.add("selected");
      selectedSize = btn.dataset.size;
      msg.classList.remove("show");
    });

    document.getElementById("qtyMinus").addEventListener("click", () => {
      qty = Math.max(1, qty - 1);
      qtyValue.textContent = qty;
    });
    document.getElementById("qtyPlus").addEventListener("click", () => {
      qty = Math.min(10, qty + 1);
      qtyValue.textContent = qty;
    });

    addBtn.addEventListener("click", () => {
      if (!selectedSize) {
        msg.textContent = "Vui lòng chọn size trước khi thêm vào giỏ.";
        msg.classList.remove("ok");
        msg.classList.add("show");
        return;
      }
      addToCart(p.id, selectedSize, qty);
      msg.textContent = `Đã thêm ${qty} đôi (size ${selectedSize}) vào giỏ hàng.`;
      msg.classList.add("ok", "show");
    });

    /* Related products */
    const relatedRoot = document.getElementById("relatedGrid");
    if (relatedRoot) {
      const related = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4);
      relatedRoot.innerHTML = related.map((r) => productCard(r, "")).join("");
    }
  }

  /* ---------------- Contact form validation ---------------- */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    const msg = document.getElementById("contactMsg");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;

      const fields = [
        { id: "cf-name", check: (v) => v.trim().length > 1 },
        { id: "cf-phone", check: (v) => /^[0-9\s+()-]{8,14}$/.test(v.trim()) },
        { id: "cf-email", check: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
        { id: "cf-message", check: (v) => v.trim().length > 5 }
      ];

      fields.forEach(({ id, check }) => {
        const input = document.getElementById(id);
        const wrapper = input.closest(".field");
        if (!check(input.value)) {
          wrapper.classList.add("error");
          valid = false;
        } else {
          wrapper.classList.remove("error");
        }
      });

      if (!valid) {
        msg.classList.remove("show", "ok");
        return;
      }

      msg.textContent = "Cảm ơn bạn! ĐINH sẽ liên hệ lại trong vòng 24 giờ.";
      msg.classList.add("show", "ok");
      form.reset();
    });
  }

  /* ---------------- Newsletter form (home) ---------------- */
  function initNewsletter() {
    const form = document.getElementById("newsletterForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("newsletterEmail");
      input.value = "";
      input.placeholder = "Đã đăng ký — cảm ơn bạn!";
    });
  }

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    initCart();
    initCheckout();
    renderFeatured();
    renderProductListing();
    renderProductDetail();
    initContactForm();
    initNewsletter();
  });
})();