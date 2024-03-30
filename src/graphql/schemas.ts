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
import { mergeTypeDefs } from '@graphql-tools/merge';
import { typeDefs as accessTokens } from './access-tokens';
import { typeDefs as ping } from './ping';
import { typeDefs as user } from './user';

const schemas = [accessTokens, ping, user];

export const typeDefs = mergeTypeDefs(schemas);
