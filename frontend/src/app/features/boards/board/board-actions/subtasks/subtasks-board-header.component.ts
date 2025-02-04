// -- copyright
// OpenProject is an open source project management software.
// Copyright (C) 2012-2021 the OpenProject GmbH
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See docs/COPYRIGHT.rdoc for more details.
//++
import { Component, Input, OnInit } from '@angular/core';
import { PathHelperService } from 'core-app/core/path-helper/path-helper.service';
import { I18nService } from 'core-app/core/i18n/i18n.service';
import { WorkPackageResource } from 'core-app/features/hal/resources/work-package-resource';
import { Highlighting } from 'core-app/features/work-packages/components/wp-fast-table/builders/highlighting/highlighting.functions';
import idFromLink from 'core-app/features/hal/helpers/id-from-link';

@Component({
  templateUrl: './subtasks-board-header.html',
  styleUrls: ['./subtasks-board-header.sass'],
  host: { class: 'title-container -small' },
})
export class SubtasksBoardHeaderComponent implements OnInit {
  @Input() public resource:WorkPackageResource;

  idFromLink = idFromLink;

  text = {
    workPackage: this.I18n.t('js.label_work_package_parent'),
  };

  typeHighlightingClass:string;

  constructor(readonly pathHelper:PathHelperService,
    readonly I18n:I18nService) {
  }

  ngOnInit() {
    this.typeHighlightingClass = Highlighting.inlineClass('type', this.resource.type.id!);
  }
}
