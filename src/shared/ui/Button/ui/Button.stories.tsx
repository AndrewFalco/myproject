import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button { ...args } />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    theme: 'clear',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'text',
    theme: 'clear',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'text',
    theme: 'background',
};

export const BackgroundThemeDark = Template.bind({});
BackgroundThemeDark.args = {
    children: 'text',
    theme: 'background',
};
BackgroundThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'text',
    theme: 'backgroundInverted',
};

export const BackgroundInvertedThemeDark = Template.bind({});
BackgroundInvertedThemeDark.args = {
    children: 'text',
    theme: 'backgroundInverted',
};
BackgroundInvertedThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
    size: 'sizeL',
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
    size: 'sizeXL',
};
