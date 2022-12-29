/*
 * Copyright 2020 大明二代
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { mergeResolvers } from 'merge-graphql-schemas';
import { resolvers as accessTokens } from './access-tokens';
import { resolvers as ping } from './ping';

const resolversArr = [accessTokens, ping];

export const resolvers = mergeResolvers(resolversArr);
