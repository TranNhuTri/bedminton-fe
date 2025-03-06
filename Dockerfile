FROM node:20.11.0 AS BUILD_IMAGE

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV APP_ROOT /nuxt

RUN mkdir ${APP_ROOT}
ADD package.json ${APP_ROOT}
ADD pnpm-lock.yaml ${APP_ROOT}
WORKDIR ${APP_ROOT}
RUN npm pkg delete scripts.prepare
RUN corepack enable pnpm
RUN npx --yes nypm i --frozen-lockfile

ADD . ${APP_ROOT}

RUN npm run build

FROM node:20.11.0-alpine

WORKDIR /nuxt
# copy from build image
COPY --from=BUILD_IMAGE /nuxt .

ENV HOST 0.0.0.0
ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]
