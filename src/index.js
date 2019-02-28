import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from './components/Theme';
import Title from './components/Title';
import Notch from './components/Notch';
import Heading from './components/Heading';
import Text from './components/Text';
import Label from './components/Label';
import Padding from './components/Padding';
import Button from './components/Button';
import Alert from './components/Alert';
import Container from './components/Container';
import Icon from './components/Icon';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
		<App>
			<Theme>
				<Title>This is a large title</Title>
				<Notch/>
				<Heading level={1}>This is a Heading 1</Heading>
				<Heading level={2}>This is a Heading 2</Heading>
				<Heading level={3}>This is a Heading 3</Heading>
				<Heading level={4}>This is a Heading 4</Heading>
				<Heading level={5}>This is a Heading 5</Heading>
				<Heading level={6}>This is a Heading 6</Heading>
				<Text>This is a text block.</Text>
				<Label>This is label text</Label>
				<Padding>
					<Text>This is a text block inside a <code>Padding</code> component.</Text>
				</Padding>
				<Button>This is a Button</Button>
				<Alert message="This is an alert!"/>
				<Container
					breakpoints={[
						{max: 400},
						{max: 500},
						{max: 900},
						{max: 1200},
						{min: 1200}
					]}
				>This is a container!</Container>
				<Icon type="left-circle" theme="twoTone" color='base'/>
				<Icon type="left-circle" theme="twoTone" color='primary'/>
				<Icon type="left-circle" theme="twoTone" color='success'/>
				<Icon type="left-circle" theme="twoTone" color='warning'/>
				<Icon type="left-circle" theme="twoTone" color='error'/>
				<Icon type="left-circle" theme="twoTone" color='normal'/>
				<Icon type="left-circle" color="base"/>
				<Icon type="left-circle" color="primary"/>
				<Icon type="left-circle" color="success"/>
				<Icon type="left-circle" color="warning"/>
				<Icon type="left-circle" color="error"/>
				<Icon type="left-circle" color="normal"/>
			</Theme>
		</App>
, document.getElementById('root'));

serviceWorker.unregister();
