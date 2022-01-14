// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

//Attempt to mock global $localize function.
import Spy = jasmine.Spy;
import createSpy = jasmine.createSpy;

// tslint:disable-next-line:variable-name 
const _global: any = typeof global !== 'undefined' && global;
const defaultFakedLocalizeTranslate: (messageParts: TemplateStringsArray, substitutions: readonly any[]) => [TemplateStringsArray, readonly any[]] =
  (messageParts: TemplateStringsArray, substitutions: readonly any[]) => {
    return [messageParts, substitutions];
  };

export interface TranslateFn {
  (messageParts: TemplateStringsArray,
    expressions: readonly any[]): [TemplateStringsArray, readonly any[]];
}

_global.mockLocalize = createSpy('mockLocalize') as Spy;

declare global {
  const mockLocalize: Spy;
}

$localize.translate = mockLocalize.and.callFake(defaultFakedLocalizeTranslate);

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
