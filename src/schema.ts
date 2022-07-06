import { Schema } from "elementor-php-core";

export const schema: Schema = [
  {
    type: 'section',
    name: 'general',
    label: 'General',
    default: [],
    fields: [
      {
        type: 'select',
        default: 'variant1',
        name: 'variant',
        label: 'Variant',
        options: {
          variant1: 'Variant 1',
          variant2: 'Variant 2',
          variant3: 'Variant 3',
          variant4: 'Variant 4',
          variant5: 'Variant 5',
        },
      },
      {
        type: 'typography',
        label: 'Name typography',
        name: 'titleTypo',
        default: '',
        selector: '{{WRAPPER}} .titleTypo'
      },
      {
        type: 'typography',
        label: 'Text typography',
        name: 'textTypo',
        default: '',
        selector: '{{WRAPPER}} .textTypo'
      },
      {
        type: 'typography',
        label: 'Work typography',
        name: 'workTypo',
        default: '',
        selector: '{{WRAPPER}} .workTypo'
      },
      {
        type: 'array',
        default: [],
        name: 'content',
        label: 'Content',
        fields: [
          // imageEnabled
          { type: 'switcher', default: true, name: 'imageEnabled', label: 'Image enabled' },
          { type: 'media', default: { url: '/wp-content/plugins/{{ name }}/src/Assets/Image/placeholder.jpeg' }, name: 'image', label: 'Image' },
          { type: 'text', default: 'Monique Greer', name: 'name', label: 'Name' },
          { type: 'wysiwyg', default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada augue eu rhoncus vehicula', name: 'text', label: 'Description' },
          { type: 'text', default: 'Web Developer', name: 'work', label: 'Work' },
          { type: 'text', default: '', name: 'buttonText', label: 'Button Text' },
          { type: 'text', default: '', name: 'buttonUrl', label: 'Button Url' },
          { type: 'color', default: '', name: 'backgroundColor', label: 'Background Color' },
          { type: 'color', default: '', name: 'nameColor', label: 'Name Color' },
          { type: 'color', default: '', name: 'textColor', label: 'Text Color' },
          { type: 'color', default: '', name: 'workColor', label: 'Work Color' },
          // { type: 'text', default: '', name: 'star', label: 'Star' },
          { type: 'color', default: '', name: 'buttonColor', label: 'Button Color' },
          { type: 'color', default: '', name: 'buttonBackgroundColor', label: 'Button Background Color' },
          { type: 'switcher', default: true, name: 'socialEnabled', label: 'Social Enabled' },
          { type: 'text', default: '#', name: 'facebook', label: 'Facebook', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '#', name: 'twitter', label: 'Twitter', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '#', name: 'instagram', label: 'Instagram', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '#', name: 'linkedin', label: 'Linkedin', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'youtube', label: 'Youtube', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'pinterest', label: 'Pinterest', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'dribbble', label: 'Dribbble', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'behance', label: 'Behance', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'github', label: 'Github', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'vimeo', label: 'Vimeo', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'soundcloud', label: 'Soundcloud', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'tumblr', label: 'Tumblr', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'twitch', label: 'Twitch', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'vk', label: 'Vk', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'reddit', label: 'Reddit', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'medium', label: 'Medium', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'spotify', label: 'Spotify', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'discord', label: 'Discord', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'telegram', label: 'Telegram', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'skype', label: 'Skype', condition: { general_content_socialEnabled: true } },
          { type: 'text', default: '', name: 'whatsapp', label: 'Whatsapp', condition: { general_content_socialEnabled: true } },
        ]
      }
    ]
  },
  {
    type: 'section',
    name: 'responsive',
    label: 'Responsive',
    default: [],
    fields: [
      { type: 'number', name: 'lg', label: 'Column Large', min: 1, max: 10, default: 3, condition: { general_variant: ['variant1', 'variant2', 'variant3', 'variant4'] } },
      { type: 'number', name: 'md', label: 'Column Medium', min: 1, max: 10, default: 3, condition: { general_variant: ['variant1', 'variant2', 'variant3', 'variant4'] } },
      { type: 'number', name: 'sm', label: 'Column Small', min: 1, max: 10, default: 2, condition: { general_variant: ['variant1', 'variant2', 'variant3', 'variant4'] } },
      { type: 'number', name: 'xs', label: 'Column Extra Small', min: 1, max: 10, default: 1, condition: { general_variant: ['variant1', 'variant2', 'variant3', 'variant4'] } },
      { type: 'number', name: 'gapLg', label: 'Gap Large', min: 0, max: 60, default: 30, condition: { general_variant: ['variant1', 'variant2', 'variant3', 'variant4'] } },
      { type: 'number', name: 'gapMd', label: 'Gap Medium', min: 0, max: 60, default: 30, condition: { general_variant: ['variant1', 'variant2', 'variant3', 'variant4'] } },
      { type: 'number', name: 'gapSm', label: 'Gap Small', min: 0, max: 60, default: 30, condition: { general_variant: ['variant1', 'variant2', 'variant3', 'variant4'] } },
      { type: 'number', name: 'gapXs', label: 'Gap Extra Small', min: 0, max: 60, default: 30, condition: { general_variant: ['variant1', 'variant2', 'variant3', 'variant4'] } }
    ],
  },
  {
    type: 'section',
    name: 'carousel',
    label: 'Carousel',
    default: [],
    fields: [
      { type: 'switcher', name: 'enable', label: 'Enable', default: false },
      { type: 'switcher', name: 'buttonEnable', label: 'Button Enable', default: true, condition: { carousel_enable: true } },
      { type: 'switcher', name: 'paginationEnable', label: 'Pagination Enable', default: true, condition: { carousel_enable: true } },
      { type: 'color', name: 'buttonColor', label: 'Button Color', default: '#000', condition: { carousel_enable: true } },
    ]
  },
];
