const Color = require('color')
const generate = require('ant-design-palettes').generate

const theme = {}
const sizes = {
	font: {},
	padding: {},
	lengths: {},
	borderRadius: {},
	breakpoints: {}
}

const colors = {
	primary: Color('#00C0D8'),
	success: Color('#2AD08F'),
	error: Color('#F7425A'),
	warning: Color('#F95A45'),
	normal: Color('#d9d9d9'),
	dark: Color('#000'),
	light: Color('#fff'),
	gray: Color('#F8F8F8')
}

const palette = {
	primary: generate(colors.primary.rgb().string()),
	success: generate(colors.success.rgb().string()),
	error: generate(colors.error.rgb().string()),
	warning: generate(colors.warning.rgb().string()),
	normal: generate(colors.normal.rgb().string()),
	dark: generate(colors.dark.rgb().string()),
	light: generate(colors.light.rgb().string())
}

sizes.font.base = 14
sizes.font.md = sizes.font.base
sizes.font.sm = Math.round(sizes.font.base * 0.85714)
sizes.font.xs = Math.round(sizes.font.base * 0.71428)
sizes.font.lg = Math.round(sizes.font.base * 1.14285)
sizes.font.xl = Math.round(sizes.font.base * 1.28571)

sizes.padding.base = 16
sizes.padding.md = sizes.padding.base
sizes.padding.sm = Math.round(sizes.padding.base * 0.75)
sizes.padding.xs = Math.round(sizes.padding.base * 0.5)
sizes.padding.lg = Math.round(sizes.padding.base * 1.5)
sizes.padding.xl = Math.round(sizes.padding.base * 2)

sizes.lineHeight = 1.5

sizes.borderWidth = 1
sizes.borderRadius.base = 4
sizes.borderRadius.sm = sizes.borderRadius.base * 0.5

sizes.breakpoints.xs = 480
sizes.breakpoints.sm = 576
sizes.breakpoints.md = 768
sizes.breakpoints.lg = 992
sizes.breakpoints.xl = 1200
sizes.breakpoints.xxl = 1600

sizes.maxContainerWidth = 1200

sizes.lengths.base = 32
sizes.lengths.md = sizes.lengths.base
sizes.lengths.sm = 24
sizes.lengths.xs = 16
sizes.lengths.lg = 40
sizes.lengths.xl = 64


theme['ant-prefix'] = 'ant'

// ------------------------------ Numbers

theme['num-font-base'] = sizes.font.base
theme['num-font-xs'] = sizes.font.xs
theme['num-font-sm'] = sizes.font.sm
theme['num-font-md'] = sizes.font.md
theme['num-font-lg'] = sizes.font.lg
theme['num-font-xl'] = sizes.font.xl

theme['num-padding-base'] = sizes.padding.base
theme['num-padding-xs'] = sizes.padding.xs
theme['num-padding-sm'] = sizes.padding.sm
theme['num-padding-md'] = sizes.padding.md
theme['num-padding-lg'] = sizes.padding.lg
theme['num-padding-xl'] = sizes.padding.xl

theme['num-max-container-width'] = sizes.maxContainerWidth

theme['num-border-width'] = sizes.borderWidth
theme['num-border-radius-base'] = sizes.borderRadius.base
theme['num-border-radius-sm'] = sizes.borderRadius.sm

theme['num-bp-xs'] = sizes.breakpoints.xs
theme['num-bp-sm'] = sizes.breakpoints.sm
theme['num-bp-md'] = sizes.breakpoints.md
theme['num-bp-lg'] = sizes.breakpoints.lg
theme['num-bp-xl'] = sizes.breakpoints.xl
theme['num-bp-xxl'] = sizes.breakpoints.xxl

theme['num-length-base'] = sizes.lengths.base
theme['num-length-xs'] = sizes.lengths.xs
theme['num-length-sm'] = sizes.lengths.sm
theme['num-length-md'] = sizes.lengths.md
theme['num-length-lg'] = sizes.lengths.lg
theme['num-length-xl'] = sizes.lengths.xl

// ------------------------------ Colors

// Primary Palette
theme['primary-color'] = colors.primary.rgb().string()
theme['primary-1'] = palette.primary[0]
theme['primary-2'] = palette.primary[1]
theme['primary-3'] = palette.primary[2]
theme['primary-4'] = palette.primary[3]
theme['primary-5'] = palette.primary[4]
theme['primary-6'] = colors.primary.rgb().string()
theme['primary-7'] = palette.primary[6]
theme['primary-8'] = palette.primary[7]
theme['primary-9'] = palette.primary[8]
theme['primary-10'] = palette.primary[9]

// Success Palette
theme['success-color'] = colors.success.rgb().string()
theme['success-1'] = palette.success[0]
theme['success-2'] = palette.success[1]
theme['success-3'] = palette.success[2]
theme['success-4'] = palette.success[3]
theme['success-5'] = palette.success[4]
theme['success-6'] = colors.success.rgb().string()
theme['success-7'] = palette.success[6]
theme['success-8'] = palette.success[7]
theme['success-9'] = palette.success[8]
theme['success-10'] = palette.success[9]

// Warning Palette
theme['warning-color'] = colors.warning.rgb().string()
theme['warning-1'] = palette.warning[0]
theme['warning-2'] = palette.warning[1]
theme['warning-3'] = palette.warning[2]
theme['warning-4'] = palette.warning[3]
theme['warning-5'] = palette.warning[4]
theme['warning-6'] = colors.warning.rgb().string()
theme['warning-7'] = palette.warning[6]
theme['warning-8'] = palette.warning[7]
theme['warning-9'] = palette.warning[8]
theme['warning-10'] = palette.warning[9]

// Error Palette
theme['error-color'] = colors.error.rgb().string()
theme['error-1'] = palette.error[0]
theme['error-2'] = palette.error[1]
theme['error-3'] = palette.error[2]
theme['error-4'] = palette.error[3]
theme['error-5'] = palette.error[4]
theme['error-6'] = colors.error.rgb().string()
theme['error-7'] = palette.error[6]
theme['error-8'] = palette.error[7]
theme['error-9'] = palette.error[8]
theme['error-10'] = palette.error[9]

// Normal Palette
theme['normal-color'] = colors.normal.rgb().string()
theme['normal-1'] = palette.normal[0]
theme['normal-2'] = palette.normal[1]
theme['normal-3'] = palette.normal[2]
theme['normal-4'] = palette.normal[3]
theme['normal-5'] = palette.normal[4]
theme['normal-6'] = colors.normal.rgb().string()
theme['normal-7'] = palette.normal[6]
theme['normal-8'] = palette.normal[7]
theme['normal-9'] = palette.normal[8]
theme['normal-10'] = palette.normal[9]

// Light Colors
theme['light-color'] = colors.light.rgb().string()
theme['light-faded-1'] = colors.light.fade(0.15).string()
theme['light-faded-2'] = colors.light.fade(0.35).string()
theme['light-faded-3'] = colors.light.fade(0.55).string()
theme['light-faded-4'] = colors.light.fade(0.75).string()
theme['light-faded-5'] = colors.light.fade(0.95).string()
theme['light-faded-6'] = colors.light.fade(0.975).string()

// dark Colors
theme['dark-color'] = colors.dark.rgb().string()
theme['dark-faded-1'] = colors.dark.fade(0.15).string()
theme['dark-faded-2'] = colors.dark.fade(0.35).string()
theme['dark-faded-3'] = colors.dark.fade(0.55).string()
theme['dark-faded-4'] = colors.dark.fade(0.75).string()
theme['dark-faded-5'] = colors.dark.fade(0.82).string()
theme['dark-faded-6'] = colors.dark.fade(0.95).string()
theme['dark-faded-7'] = colors.dark.fade(0.98).string()

theme['light-gray'] = colors.gray.rgb().string()

// Border Colors
theme['lighter-border-color'] = 'hsv(0, 0, 85%)'
theme['darker-border-color'] = 'hsv(0, 0, 91%)'

// Color Assignment
theme['info-color'] = theme['primary-color']
theme['processing-color'] = theme['primary-color']
theme['highlight-color'] = theme['error-color']
theme['body-background'] = theme['light-color']
theme['component-background'] = theme['light-color']
theme['heading-color'] = theme['dark-faded-1']
theme['text-color'] = theme['dark-faded-2']
theme['text-color-translucent'] = 'rgba(0,0,0,0.075)';
theme['text-color-secondary'] = theme['dark-faded-3']
theme['item-active-bg'] = theme['dark-faded-6']
theme['item-hover-bg'] = theme['dark-faded-6']
theme['heading-color-dark'] = theme['light-color']
theme['text-color-dark'] = theme['light-faded-1']
theme['text-color-secondary-dark'] = theme['light-faded-2']


theme['background-color-light'] = 'hsv(0, 0, 98%)'
theme['background-color-base'] = 'hsv(0, 0, 96%)'

theme['disabled-color'] = theme['dark-faded-4']
theme['disabled-bg'] = theme['background-color-base']
theme['disabled-color-dark'] = colors.light.fade(0.65).string()

theme['font-family'] = `'Circular', sans-serif`
theme['font-family-alt'] = `'DIN', 'Circular', sans-serif`
theme['font-variant-base'] = 'tabular-nums'

theme['font-size-base'] = theme['num-font-base'] + 'px'
theme['font-size-xs'] = theme['num-font-xs'] + 'px'
theme['font-size-sm'] = theme['num-font-sm'] + 'px'
theme['font-size-md'] = theme['num-font-md'] + 'px'
theme['font-size-lg'] = theme['num-font-lg'] + 'px'
theme['font-size-xl'] = theme['num-font-xl'] + 'px'
theme['font-size-xxl'] = theme['num-font-xl'] + 2 + 'px'

theme['label-font-weight'] = '800'
theme['label-font-size'] = '0.68rem'
theme['label-text-transform'] = 'uppercase'
theme['label-font-family'] = theme['font-family']
theme['label-letter-spacing'] = '0.125em'

theme['padding-base'] = theme['num-padding-base'] + 'px'
theme['padding-xs'] = theme['num-padding-xs'] + 'px'
theme['padding-sm'] = theme['num-padding-sm'] + 'px'
theme['padding-md'] = theme['num-padding-md'] + 'px'
theme['padding-lg'] = theme['num-padding-lg'] + 'px' // containers
theme['padding-xl'] = theme['num-padding-xl'] + 'px'

theme['max-container-width'] = theme['num-max-container-width'] + 'px'

theme['control-padding-horizontal'] = theme['padding-sm']
theme['control-padding-horizontal-sm'] = theme['padding-xs']

theme['iconfont-css-prefix'] = 'anticon'

// Links
theme['link-color'] = theme['primary-color']
theme['link-hover-color'] = theme['primary-5']
theme['link-active-color'] = theme['primary-7']
theme['link-decoration'] = 'none'
theme['link-hover-decoration'] = 'none'

// Borders
theme['border-color-base'] = theme['lighter-border-color']
theme['border-color-split'] = theme['darker-border-color']
theme['border-radius-base'] = theme['num-border-radius-base'] + 'px'
theme['border-radius-sm'] = theme['num-border-radius-sm'] + 'px'
theme['border-width-base'] = theme['num-border-width'] + 'px'
theme['border-style-base'] = 'solid'

// Outlines
theme['outline-color'] = theme['primary-color']
theme['outline-blur-size'] = 0
theme['outline-width'] = '2px'

// Shadows
theme['shadow-color'] = theme['dark-faded-4']
theme['shadow-1-up'] = '0 -2px 8px ' + theme['shadow-color']
theme['shadow-1-down'] = '0 2px 8px ' + theme['shadow-color']
theme['shadow-1-left'] = '-2px 0 8px ' + theme['shadow-color']
theme['shadow-1-right'] = '2px 0 8px ' + theme['shadow-color']
theme['shadow-2'] = '0 4px 12px ' + theme['shadow-color']
theme['box-shadow-base'] = theme['shadow-1-down']

// Buttons
theme['btn-font-weight'] = 400
theme['btn-border-radius-base'] = theme['border-radius-base']
theme['btn-border-radius-sm'] = theme['border-radius-base']

theme['btn-height-base'] = theme['num-length-base'] + 'px'

theme['icon-xxl-size'] = theme['num-length-base'] + 'px'

theme['body-background'] = theme['light-gray']

theme['layout-body-background'] = theme['light-gray']
theme['layout-header-background'] = 'transparent'
theme['layout-sider-background-light'] = 'transparent'
theme['layout-header-padding'] = '0 ' + theme['padding-lg']

// Headings
theme['h1-font-size'] = '26px'
theme['h2-font-size'] = '20px'
theme['h3-font-size'] = '18px'
theme['h4-font-size'] = '16px'
theme['h5-font-size'] = '14px'
theme['h6-font-size'] = '12px'

// Layout

theme['num-sider-width'] = 280
theme['num-sider-width-collapsed'] = 64
theme['num-sider-width-expanded'] = theme['num-sider-width'] + theme['num-sider-width-collapsed']
theme['sider-width'] = theme['num-sider-width'] + 'px'
theme['sider-width-collapsed'] = theme['num-sider-width-collapsed'] + 'px'
theme['sider-width-expanded'] = theme['num-sider-width-expanded'] + 'px'


// Shadows


theme['shadow-soft'] = ''
theme['shadow-hard'] = ''
theme['shadow-none'] = '0 0 0 1px rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0)'
theme['shadow-elevation-0'] = '0 0 0 1px rgba(16,22,26,.15), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0)'
theme['shadow-elevation-1'] = '0 0 0 1px rgba(16,22,26,0.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.125)'
theme['shadow-elevation-2'] = '0 0 0 1px rgba(16,22,26,0.05), 0 1px 1px rgba(16,22,26,0.125), 0 2px 6px rgba(16,22,26,0.125)'
theme['shadow-elevation-3'] = '0 0 0 1px rgba(16,22,26,0.05), 0 2px 4px rgba(16,22,26,0.125), 0 8px 24px rgba(16,22,26,0.125)'
theme['shadow-elevation-4'] = '0 0 0 1px rgba(16,22,26,0.05), 0 4px 8px rgba(16,22,26,0.125), 0 18px 46px 6px rgba(16,22,26,0.125)'
theme['shadow-hover'] = '0 0 0 1px rgba(16,22,26,0.05), 0 2px 4px rgba(16,22,26,0.125), 0 8px 24px rgba(16,22,26,0.125)'


// Icon Types
theme.icons = [
    'account-book',
    'alert',
    'alipay-circle',
    'aliwangwang',
    'android',
    'api',
    'apple',
    'appstore',
    'audio',
    'backward',
    'bank',
    'behance-square',
    'book',
    'bell',
    'box-plot',
    'build',
    'bulb',
    'calculator',
    'calendar',
    'camera',
    'car',
    'caret-down',
    'caret-left',
    'caret-right',
    'caret-up',
    'carry-out',
    'check-circle',
    'check-square',
    'chrome',
    'clock-circle',
    'close-circle',
    'close-square',
    'cloud',
    'code',
    'codepen-circle',
    'compass',
    'contacts',
    'container',
    'control',
    'copy',
    'credit-card',
    'crown',
    'customer-service',
    'dashboard',
    'database',
    'delete',
    'diff',
    'dislike',
    'down-circle',
    'down-square',
    'dribbble-square',
    'edit',
    'environment',
    'exclamation-circle',
    'eye-invisible',
    'experiment',
    'eye',
    'facebook',
    'fast-backward',
    'fast-forward',
    'file-add',
    'file-excel',
    'file-exclamation',
    'file-image',
    'file-markdown',
    'file-pdf',
    'file-ppt',
    'file-unknown',
    'file-word',
    'file-text',
    'file-zip',
    'filter',
    'file',
    'fire',
    'flag',
    'folder-add',
    'folder-open',
    'folder',
    'forward',
    'fund',
    'frown',
    'funnel-plot',
    'gift',
    'github',
    'gitlab',
    'hdd',
    'heart',
    'highlight',
    'home',
    'hourglass',
    'html5',
    'idcard',
    'info-circle',
    'instagram',
    'insurance',
    'interation',
    'layout',
    'left-circle',
    'left-square',
    'like',
    'linkedin',
    'lock',
    'mail',
    'medicine-box',
    'meh',
    'message',
    'minus-circle',
    'minus-square',
    'mobile',
    'money-collect',
    'notification',
    'pause-circle',
    'pay-circle',
    'phone',
    'picture',
    'pie-chart',
    'play-circle',
    'play-square',
    'plus-circle',
    'plus-square',
    'printer',
    'profile',
    'project',
    'property-safety',
    'pushpin',
    'question-circle',
    'read',
    'reconciliation',
    'red-envelope',
    'rest',
    'right-circle',
    'right-square',
    'rocket',
    'safety-certificate',
    'save',
    'schedule',
    'security-scan',
    'setting',
    'shop',
    'shopping',
    'skin',
    'skype',
    'slack-square',
    'sliders',
    'smile',
    'snippets',
    'sound',
    'star',
    'step-backward',
    'step-forward',
    'stop',
    'switcher',
    'tablet',
    'tag',
    'taobao-circle',
    'tags',
    'tool',
    'thunderbolt',
    'trophy',
    'unlock',
    'up-circle',
    'up-square',
    'usb',
    'video-camera',
    'wallet',
    'warning',
    'wechat',
    'weibo-circle',
    'weibo-square',
    'windows',
    'yahoo',
    'youtube',
    'yuque',
    'alibaba',
    'align-center',
    'align-left',
    'align-right',
    'alipay',
    'aliyun',
    'amazon',
    'ant-cloud',
    'ant-design',
    'apartment',
    'area-chart',
    'arrow-down',
    'arrow-left',
    'arrow-right',
    'arrows-alt',
    'arrow-up',
    'audit',
    'bar-chart',
    'barcode',
    'bars',
    'behance',
    'bg-colors',
    'block',
    'bold',
    'border-bottom',
    'border-horizontal',
    'border-inner',
    'border-left',
    'border-outer',
    'border-right',
    'border-top',
    'border-verticle',
    'border',
    'branches',
    'check',
    'ci',
    'close',
    'cloud-download',
    'cloud-server',
    'cloud-sync',
    'cloud-upload',
    'cluster',
    'code-sandbox',
    'codepen',
    'coffee',
    'colum-height',
    'column-width',
    'copyright',
    'dash',
    'deployment-unit',
    'desktop',
    'dingding',
    'disconnect',
    'dollar',
    'dot-chart',
    'double-left',
    'double-right',
    'down',
    'download',
    'drag',
    'dribbble',
    'dropbox',
    'ellipsis',
    'enter',
    'euro',
    'exception',
    'exclamation',
    'export',
    'fall',
    'file-done',
    'file-jpg',
    'file-protect',
    'file-search',
    'file-sync',
    'font-colors',
    'font-size',
    'fork',
    'form',
    'fullscreen-exit',
    'fullscreen',
    'gateway',
    'global',
    'gold',
    'google-plus',
    'google',
    'heat-map',
    'ie',
    'import',
    'inbox',
    'info',
    'issues-close',
    'italic',
    'key',
    'laptop',
    'left',
    'line-chart',
    'line-height',
    'line',
    'link',
    'loading-3-quarters',
    'loading',
    'login',
    'logout',
    'man',
    'medium-workmark',
    'medium',
    'menu-fold',
    'menu-unfold',
    'menu',
    'minus',
    'monitor',
    'mr',
    'number',
    'ordered-list',
    'paper-clip',
    'pause',
    'percentage',
    'pic-center',
    'pic-left',
    'pic-right',
    'plus',
    'pound',
    'poweroff',
    'qq',
    'qrcode',
    'question',
    'radar-chart',
    'radius-bottomleft',
    'radius-bottomright',
    'radius-setting',
    'radius-upleft',
    'radius-upright',
    'reddit',
    'redo',
    'reload-time',
    'reload',
    'retweet',
    'rise',
    'right',
    'robot',
    'rollback',
    'safety',
    'scan',
    'scissor',
    'search',
    'select',
    'shake',
    'share-alt',
    'shopping-cart',
    'shrink',
    'sketch',
    'slack',
    'small-dash',
    'solution',
    'sort-ascending',
    'sort-descending',
    'stock',
    'strikethrough',
    'swap-left',
    'swap-right',
    'swap',
    'sync',
    'table',
    'taobao',
    'team',
    'to-top',
    'trademark',
    'transaction',
    'twitter',
    'underline',
    'undo',
    'unordered-list',
    'up',
    'upload',
    'user-add',
    'user-delete',
    'user',
    'usergroup-add',
    'usergroup-delete',
    'vertical-align-bottom',
    'vertical-align-middle',
    'vertical-align-top',
    'vertical-left',
    'vertical-right',
    'weibo',
    'wifi',
    'woman',
    'zhihu',
    'zoom-in',
    'zoom-out'
];


// Article Styling

theme['article-padding-vertical'] = ''
theme['article-padding-horizontal'] = ''


module.exports = theme;