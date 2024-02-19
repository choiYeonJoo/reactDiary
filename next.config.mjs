/** @type {import('next').NextConfig} */
const nextConfig = {
    //실제 빌드 후에는 정상이더라도, 개발에서는 useEffect가 두번 호출 되는 현상이 있는데, 이 것을 막아줌
    reactStrictMode : false
};

export default nextConfig;
