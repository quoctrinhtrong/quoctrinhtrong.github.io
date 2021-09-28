const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, agrv) => {
    const isDev = agrv.mode === 'development'
    return {
        entry: './src/index.ts',
        module: {
            // rules la nơi chưa các loader
            rules: [
                // test nhận vào regex để nhận biết file, nếu true thì chạy loader
                // exclude nhận 1 regex nếu true thì không chạy loader
                // use nhận vào 1 object hoặc array chứa thông tin loader
                {
                    test: /\.(ts|tsx)$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(s[ac]ss|css)$/,
                    use: [
                        'style-loader',
                        {
                            // Giup import file css
                            loader: 'css-loader',
                            // nếu là dev thì để sourceMap để load css vào internal trên thẻ style thuận tiện cho việc dev
                            options: { sourceMap: isDev ? true : false }
                        },
                        {
                            // giup compile sass to css
                            loader: 'sass-loader',
                            options: { sourceMap: isDev ? true : false }
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        {
                            // giup import file image
                            loader: 'file-loader',
                            options: {
                                name: '[path][name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        // resolve quy định thứ tự ưu tiên khi import các file. vd ['.js', '.jsx'] trong 1 folder có 2 file name.js và name.jsx nó sẽ ưu tiên chọn file js
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            alias: {
                '@': path.resolve('src'),
                '@@': path.resolve()
            }
        },
        output: {
            // tạo 1 đường dẫn tuyệt đối đên thư mục sau khi build. VD: path.resolve("dist"):  D:\Projects\Training-Webpack\Bai1\dist
            path: path.resolve('dist'),
            // public path quy định đường dẫn tương đối để có thể trỏ đến file trong dist sau khi build
            publicPath: '',
            // tên file sau khi build
            filename: 'bundle.[hash:6].js',
            // Chỉnh config để target code sau khi build là ES5
            environment: {
                arrowFunction: false,
                bigIntLiteral: false,
                const: false,
                destructuring: false,
                dynamicImport: false,
                forOf: false,
                module: false
            }
        },
        // Nếu là dev thì để Source map để dễ debug, pro thì xóa đi cho nhẹ
        devtool: isDev ? 'source-map' : false,
        devServer: {
            // content base chưa đường dẫn tương đối đên file index.html
            contentBase: 'public',
            port: 3000,
            // chế độ hot reload khi có sự thay đổi code
            hot: true,
            // publicPath chứa đường dẫn tương đối đến root. Ở đây là folder dist. Lưu ý phải có / ở trước và sau
            // publicPath: '/dist/',
            // watchContentBase theo dõi nếu có thay đổi gì trên file html sẽ tự đồng reload
            watchContentBase: true
        },
        //HtmlWebpackPlugin sẽ tạo ra 1 file html mới từ file html ban đầu sau mỗi lần build
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            })
        ]
    }
}