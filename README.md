## Material-ui
https://material-ui.com/ja/  
Reactのmaterial-uiがどういうものか触ってみた程度のレベルですが、紹介します。  
まず、material-uiとはマテリアルデザインをベースに開発されたコンポーネントライブラリです。  
CSSフレームワークと似たようなポジションのものだと思っていて、1からコンポーネントを開発しなくても  
読み込んだコンポーネントを配置していくだけでちゃんとした画面が作れます。  
公式サイトには一応日本語もありますが、翻訳されていないページも多く、変な翻訳が多かったりします。

### 使い方
インストールしたmaterial-uiから、使いたいコンポーネントをimportして設置する。  
```
import Button from '@material-ui/core/Button';

const Hoge = () => {
  return (
    <Button>
      ボタン
    </Button>
  );
}
```

### コンポーネントに設定できるprops
コンポーネント毎に渡せるpropsがあり、値を変えることでカスタマイズが可能。  
propsは公式のComponentAPIページで確認できる。翻訳はされていない。  
・ボタン
https://material-ui.com/ja/api/button/

あとはシステムページに載っているコンポーネント共通のpropsとか  
https://material-ui.com/ja/system/basics/

### スタイルのカスタマイズ
propsだけでは変更できないスタイルの調整はstyled,makeStyles,withStylesなどを使って行う。  
やり方は色々あるみたいだが、Hooksでやる場合はmakeStylesを使う。  
コンポーネント個別にスタイル調整したい場合もこれ、全体的にスタイル調整したいならテーマを弄る（後述）
```
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    fontSize: '28px',
    fontWeight: 'bold'
  }
});

const Hoge = () => {
  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" className={classes.button}>
        ボタン スタイルカスタマイズ
      </Button>
    </div>
  );
};
```

### テーマの変更
createMuiThemeでテーマデータを作成して、ThemeProviderで下層コンポーネントにテーマデータを提供する。  
テーマ作成  
```
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    success: {
      main: '#ff6600'
    }
  }
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      ...
    </ThemeProvider>
  );
};
```
テーマの参照
```
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    color: theme.palette.success.main
  }
}));
```
makeStylesの引数でthemeを取って、さっき設定したpalette.success.mainで色を取得する。  
createMuiThemeで設定しなかった項目はデフォルトのものが入っている。  
paletteのデフォルト: https://material-ui.com/customization/palette/  

light,main,darkなどがセットになった色オブジェクトも用意されている。  
```
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
```

当然色だけではなく、フォント関連だったりマージン、ブレイクポイントもテーマで変更できる。  

### フォントについて
Material-UIはRobotoフォントをベースに設計されているが、フォントの自動読み込みが組み込まれていないので、開発者がGoogleWebFonts等で読み込み処理を追加する必要がある。  
公式に載っているCDN読み込みタグ  
```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```
npmからインストールしてエントリポイントでインポートする方法でもOK。  
バンドルサイズが大きくなるので注意。  
```
npm install fontsource-roboto
```
Material-UIが依存しているフォントウェイトは300、400、500、700のみ。それ以外を読み込んでもムダ。  

### CssBaseline
normalize.css的なのが用意されている。  
https://material-ui.com/ja/components/css-baseline/  
```
import CssBaseline from '@material-ui/core/CssBaseline';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
    </React.Fragment>
  );
}
```
CssBaseLineを既存の要素とかに影響させたくない場合、子要素にのみスコープを当てるScopedCssBaseLineもある。  
```
import React from 'react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import MyApp from './MyApp';

export default function MyApp() {
  return (
    <ScopedCssBaseline>
      {/* The rest of your application */}
      <MyApp />
    </ScopedCssBaseline>
  );
}
```

### 事例
https://material-ui.com/ja/discover-more/showcase/  

### 終わり
あとは適当にコンポーネントを見て使いたいものを配置したりする、機能がめっちゃ多いので大抵のことはできると思う。  
アコーディオンとか動きがあるものも公式サイトからソースコードのコピーができるので、コピペすればいいと思う。超簡単  
https://material-ui.com/components/accordion/  
実務で使うなら管理画面の作成とか？  
テンプレ  
https://material-ui.com/getting-started/templates/
