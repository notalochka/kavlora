import type { GetServerSideProps } from "next";

function getOrigin(req: Parameters<GetServerSideProps>[0]["req"]): string {
  const forwardedProto = req.headers["x-forwarded-proto"];
  const protocol =
    typeof forwardedProto === "string"
      ? forwardedProto.split(",")[0]
      : req.headers.host?.includes("localhost")
        ? "http"
        : "https";
  const host = req.headers.host ?? "localhost:3000";

  return `${protocol}://${host}`;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const origin = getOrigin(req);
  const aiText = `# Kavlora
> Виробник дубових ламелей та заготовок для паркетної дошки.

## Опис
Kavlora виготовляє дубові ламелі від 2 мм та заготовки для паркетної дошки за параметрами замовника.

## Послуги
- Виготовлення дубових ламелей
- Виробництво заготовок для паркетної дошки
- Консультації щодо підбору матеріалів

## Контакти
- Сайт: ${origin}
- Email: kavlora@gmail.com
- Телефон: +380 93 476 27 87

## Сторінки
- Головна: ${origin}/
- Про нас: ${origin}/about-us
- Контакти: ${origin}/contact`;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.write(aiText);
  res.end();

  return { props: {} };
};

export default function AiTxt() {
  return null;
}
