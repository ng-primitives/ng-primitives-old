import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SelectExample } from '../../examples/select/select.example';
import { NgpSelectDirective } from './select.directive';

const meta: Meta<NgpSelectDirective> = {
  component: NgpSelectDirective,
  title: 'Select',
  decorators: [
    moduleMetadata({
      imports: [NgpSelectDirective, SelectExample],
    }),
  ],
};

export default meta;

type Story = StoryObj<NgpSelectDirective>;

export const Default: Story = {
  render: () => ({
    template: '<ngp-select-example />',
  }),
  args: {},
};
