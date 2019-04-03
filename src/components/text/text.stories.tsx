import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import Text from './';
import StorybookUI from '../../utils/storybook-ui';

const sizes = {
  normal: 'normal',
  small: 'small',
  large: 'large',
  xlarge: 'xlarge',
};
const html = `
<h1>Heading Level One</h1>
<p>Lorem ipsum dolor amet yOLO williamsburg +1 street <a href="http://gospecless.com" target="_blank">art meditation</a> mustache thundercats godard hot chicken crucifix. <b>Meggings narwhal</b> poutine paleo la croix mlkshk etsy bushwick franzen fingerstache photo booth. Mumblecore poutine celiac poke. Williamsburg sartorial readymade, shabby chic humblebrag vaporware hella +1 marfa shaman. <u>Authentic street</u> art <code class='code-inline'>letterpress</code> intelligentsia venmo. Knausgaard microdosing 90’s, waistcoat 3 wolf moon kombucha direct trade tote bag heirloom roof party. Butcher banh mi cronut brooklyn you probably haven’t heard of them direct trade.</p>
<ul><li>Item One
</li><li>Item Two
</li><li>Item Three
</li><li>Item Four
</li></ul>
<br>
<h2>Heading Level Two</h2>
<p>Craft beer banjo seitan mumblecore. Cornhole hexagon shoreditch, fam humblebrag jean shorts hella irony portland lomo. Letterpress vexillologist cornhole, before they sold out freegan paleo vaporware shaman <code class='code-inline'>keffiyeh</code>. Raclette gochujang air plant poutine. Prism pabst listicle raclette. Brunch twee lomo letterpress humblebrag, DIY pop-up artisan keytar fingerstache seitan pork belly jianbing. Brunch mustache crucifix franzen copper mug microdosing.</p>
<p>Lumbersexual iPhone ennui tote bag, photo booth la croix gentrify literally. Ugh viral bitters retro. Everyday carry marfa biodiesel, quinoa occupy shabby chic wolf. Venmo tofu YOLO iPhone pop-up pork belly echo park.</p>
<ol><li>Item One
</li><li>Item Two
</li><li>Item Three
</li><li>Item Four
</li></ol>
<h3>Heading Level Three</h3>
<p>Craft beer banjo seitan mumblecore. Cornhole hexagon shoreditch, fam humblebrag jean shorts hella irony portland lomo. Letterpress vexillologist cornhole, before they sold out freegan paleo vaporware shaman <code class='code-inline'>keffiyeh</code>. Raclette gochujang air plant poutine. Prism pabst listicle raclette. Brunch twee lomo letterpress humblebrag, DIY pop-up artisan keytar fingerstache seitan pork belly jianbing. Brunch mustache crucifix franzen copper mug microdosing.</p>
<p>Lumbersexual iPhone ennui tote bag, photo booth la croix gentrify literally. Ugh viral bitters retro. Everyday carry marfa biodiesel, quinoa occupy shabby chic wolf. Venmo tofu YOLO iPhone pop-up pork belly echo park.</p>
<h4>Heading Level Four</h4>
<p>Craft beer banjo seitan mumblecore. Cornhole hexagon shoreditch, fam humblebrag jean shorts hella irony portland lomo. Letterpress vexillologist cornhole, before they sold out freegan paleo vaporware shaman <code class='code-inline'>keffiyeh</code>. Raclette gochujang air plant poutine. Prism pabst listicle raclette. Brunch twee lomo letterpress humblebrag, DIY pop-up artisan keytar fingerstache seitan pork belly jianbing. Brunch mustache crucifix franzen copper mug microdosing.</p>
<p>Lumbersexual iPhone ennui tote bag, photo booth la croix gentrify literally. Ugh viral bitters retro. Everyday carry marfa biodiesel, quinoa occupy shabby chic wolf. Venmo tofu YOLO iPhone pop-up pork belly echo park.</p>
<h5>Heading Level Five</h5>
<p>Craft beer banjo seitan mumblecore. Cornhole hexagon shoreditch, fam humblebrag jean shorts hella irony portland lomo. Letterpress vexillologist cornhole, before they sold out freegan paleo vaporware shaman <code class='code-inline'>keffiyeh</code>. Raclette gochujang air plant poutine. Prism pabst listicle raclette. Brunch twee lomo letterpress humblebrag, DIY pop-up artisan keytar fingerstache seitan pork belly jianbing. Brunch mustache crucifix franzen copper mug microdosing.</p>
<p>Lumbersexual iPhone ennui tote bag, photo booth la croix gentrify literally. Ugh viral bitters retro. Everyday carry marfa biodiesel, quinoa occupy shabby chic wolf. Venmo tofu YOLO iPhone pop-up pork belly echo park.</p>
<h6>Heading Level Six</h6>
<p>Craft beer banjo seitan mumblecore. Cornhole hexagon shoreditch, fam humblebrag jean shorts hella irony portland lomo. Letterpress vexillologist cornhole, before they sold out freegan paleo vaporware shaman <code class='code-inline'>keffiyeh</code>. Raclette gochujang air plant poutine. Prism pabst listicle raclette. Brunch twee lomo letterpress humblebrag, DIY pop-up artisan keytar fingerstache seitan pork belly jianbing. Brunch mustache crucifix franzen copper mug microdosing.</p>
<p>Lumbersexual iPhone ennui tote bag, photo booth la croix gentrify literally. Ugh viral bitters retro. Everyday carry marfa biodiesel, quinoa occupy shabby chic wolf. Venmo tofu YOLO iPhone pop-up pork belly echo park.</p>
`;
storiesOf('Typography', module)
  .addDecorator((story) => <StorybookUI>{story()}</StorybookUI>)
  .add('Text', () => (
    <Text size={select('size', sizes, 'normal') as any}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Text>
  ));
