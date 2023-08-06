/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Compodoc {
  pipes: any[];
  interfaces: Interface[];
  injectables: any[];
  guards: any[];
  interceptors: any[];
  classes: any[];
  directives: DirectiveDecl[];
  components: any[];
  modules: any[];
  miscellaneous: Miscellaneous;
  routes: any[];
  coverage: Coverage;
}

export interface Coverage {
  count: number;
  status: Status;
  files: File[];
}

export interface File {
  filePath: string;
  type: LinksubtypeEnum;
  linktype: LinktypeEnum;
  name: string;
  coveragePercent: number;
  coverageCount: string;
  status: Status;
  linksubtype?: LinksubtypeEnum;
}

export enum LinksubtypeEnum {
  Directive = 'directive',
  Function = 'function',
  Interface = 'interface',
  Variable = 'variable',
}

export enum LinktypeEnum {
  Directive = 'directive',
  Interface = 'interface',
  Miscellaneous = 'miscellaneous',
}

export enum Status {
  Good = 'good',
  Low = 'low',
  Medium = 'medium',
  VeryGood = 'very-good',
}

export interface DirectiveDecl {
  name: string;
  id: string;
  file: string;
  type: LinksubtypeEnum;
  description: string;
  rawdescription: Rawdescription;
  sourceCode: string;
  selector?: string;
  providers: Provider[];
  hostDirectives: HostDirective[];
  standalone: boolean;
  inputsClass: HostBinding[];
  outputsClass: HostBinding[];
  deprecated: boolean;
  deprecationMessage: string;
  hostBindings: HostBinding[];
  hostListeners: HostListener[];
  propertiesClass: HostBinding[];
  methodsClass: MethodsClass[];
  implements?: string[];
  accessors?: Accessors;
  exportAs?: string;
}

export interface Accessors {
  isDisabled?: Active;
  orientation?: Active;
  triggerId?: Active;
  visible?: Active;
  isOpen?: Active;
  state?: Active;
  tabindex?: Active;
  active?: Active;
  checked?: Active;
}

export interface Active {
  name: string;
  getSignature: GetSignature;
}

export interface GetSignature {
  name: string;
  type: string;
  returnType: string;
  line: number;
  rawdescription: string;
  description: string;
  jsdoctags?: TagNameElement[];
}

export interface TagNameElement {
  pos?: number;
  end?: number;
  flags?: number;
  modifierFlagsCache?: number;
  transformFlags?: number;
  kind?: number;
  tagName?: TagNameElement;
  comment?: string;
  escapedText?: string;
  text?: Text;
}

export enum Text {
  Param = 'param',
  Returns = 'returns',
}

export interface HostBinding {
  name: string;
  defaultValue?: string;
  deprecated: boolean;
  deprecationMessage: string;
  jsdoctags?: TagNameElement[];
  rawdescription?: string;
  description: string;
  line: number;
  type: string;
  decorators?: Decorator[];
  required?: boolean;
  optional?: boolean;
  modifierKind?: number[];
}

export type InputsClass = HostBinding;
export type OutputsClass = HostBinding;

export interface Decorator {
  name: DecoratorName;
  stringifiedArguments: string;
}

export enum DecoratorName {
  ContentChildren = 'ContentChildren',
  HostBinding = 'HostBinding',
  HostListener = 'HostListener',
}

export interface HostDirective {
  name: string;
  inputs?: string[];
  outputs?: any[];
}

export interface HostListener {
  name: string;
  args: ChildElement[];
  argsDecorator: string[];
  deprecated: boolean;
  deprecationMessage: string;
  rawdescription?: string;
  description?: string;
  line: number;
  jsdoctags?: HostListenerJsdoctag[];
}

export interface ChildElement {
  name: string;
  type?: string;
  deprecated: boolean;
  deprecationMessage: string;
  tagName?: ArgTagName;
}

export interface ArgTagName {
  text: Text;
}

export interface HostListenerJsdoctag {
  pos: number;
  end: number;
  flags: number;
  modifierFlagsCache: number;
  transformFlags: number;
  kind: number;
  tagName: TagNameElement;
  comment: string;
  name?: TagNameElement;
  isNameFirst?: boolean;
  isBracketed?: boolean;
}

export interface MethodsClass {
  name: string;
  args: MethodsClassArg[];
  optional: boolean;
  returnType: ReturnType;
  typeParameters: any[];
  line: number;
  deprecated: boolean;
  deprecationMessage: string;
  rawdescription?: string;
  description?: string;
  modifierKind?: number[];
  jsdoctags?: MethodsClassJsdoctag[];
  decorators?: Decorator[];
}

export interface MethodsClassArg {
  name: string;
  type: string;
  deprecated: boolean;
  deprecationMessage: string;
  optional?: boolean;
  function?: ChildElement[];
}

export interface MethodsClassJsdoctag {
  name?: TagNameElement | string;
  type?: string;
  deprecated?: boolean;
  deprecationMessage?: string;
  tagName: TagNameElement;
  comment?: string;
  optional?: boolean;
  function?: ChildElement[];
}

export enum ReturnType {
  Boolean = 'boolean',
  Void = 'void',
}

export interface Provider {
  name: string;
  type: LinksubtypeEnum;
}

export enum Rawdescription {
  Empty = '\n',
}

export interface Interface {
  name: TypeEnum;
  id: string;
  file: string;
  deprecated: boolean;
  deprecationMessage: string;
  type: LinksubtypeEnum;
  sourceCode: string;
  properties: HostBinding[];
  indexSignatures: any[];
  kind: number;
  methods: any[];
}

export enum TypeEnum {
  Empty = '',
  NgpAccordionConfig = 'NgpAccordionConfig',
  NgpAvatarConfig = 'NgpAvatarConfig',
  NgpTabsetConfig = 'NgpTabsetConfig',
  NgpTooltipConfig = 'NgpTooltipConfig',
  Number = 'number',
  ResizeEvent = 'ResizeEvent',
}

export interface Miscellaneous {
  variables: Variable[];
  functions: FunctionDecl[];
  typealiases: any[];
  enumerations: Enumeration[];
  groupedVariables: { [key: string]: Variable[] };
  groupedFunctions: GroupedFunctions;
  groupedEnumerations: GroupedEnumerations;
  groupedTypeAliases: any;
}

export interface Enumeration {
  name: string;
  childs?: ChildElement[];
  ctype: LinktypeEnum;
  subtype: string;
  deprecated: boolean;
  deprecationMessage: string;
  description: string;
  file: string;
  args?: ChildElement[];
  returnType?: string;
  jsdoctags?: EnumerationJsdoctag[];
}

export interface EnumerationJsdoctag {
  tagName: JsdoctagTagName;
  comment?: string;
  name?: TagNameElement | string;
  type?: JsdoctagType;
  deprecated?: boolean;
  deprecationMessage?: string;
}

export interface JsdoctagTagName {
  pos?: number;
  end?: number;
  flags?: number;
  modifierFlagsCache?: number;
  transformFlags?: number;
  kind?: number;
  escapedText?: Text;
  text?: Text;
}

export enum JsdoctagType {
  HTMLElement = 'HTMLElement',
  Partial = 'Partial',
}

export interface FunctionDecl {
  name: string;
  file: string;
  ctype: LinktypeEnum;
  subtype: LinksubtypeEnum;
  deprecated: boolean;
  deprecationMessage: string;
  description: string;
  args: ChildElement[];
  returnType: string;
  jsdoctags?: EnumerationJsdoctag[];
}

export interface GroupedEnumerations {
  'packages/ng-primitives/avatar/src/avatar/avatar.directive.ts': Enumeration[];
}

export type GroupedFunctions = Record<string, Enumeration[] | FunctionDecl[]>;

export interface Variable {
  name: string;
  ctype: LinktypeEnum;
  subtype: LinksubtypeEnum;
  file: string;
  deprecated: boolean;
  deprecationMessage: string;
  type: TypeEnum;
  defaultValue: string;
  rawdescription?: string;
  description?: string;
}
