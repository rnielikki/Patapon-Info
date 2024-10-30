# showDialogEx

Opens dialogue.

Not all dialogs use this, part of the in-game dialogs (e.g. in barracks) are hardcoded.

This pauses pac instruction execution until the choice is done.

## Code Information

- **Name**: `showDialogEx`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 0d 00`
- **Assembly Address in Memory** : `0x892d788`

## Parameters

- `(int *)result` *(8 bytes)* : Variable to **store the result**, as a **choice index**. `-1` is still selecting. 
- `(int)position_x` *(8 bytes)* : X position to put the dialog, as *PSP screen pixels on screen*. Set as `0xE0` to put middle of the screen.
- `(int)position_y` *(8 bytes)* : Y position to put the dialog, as *PSP screen pixels on screen*. Set as `0x88` to put middle of the screen.
  - Note that **PSP screen size is 480 x 272** and the **pivot is on the middle**. 
- `(Address)message_address` *(4 bytes)* : Message to display as main text.
  - This is message ID from **message address table in the PAC file**. Details on: [about message table](./guide/about-message.md#message-table).
- `(int)close_button_Id` *(8 bytes)* : [Input Button ID](./guide/reference-table.md#input-id-flags) to cancel and close the window. Keep `0x200` to cancel with `◯` button.
- `(int)default_choice` *(8 bytes)* : Choice index to select by *default*.
- `(bool)has_title` *(8 bytes)* : **Set 0 to hide the title bar** (The red text above the main text).
  - Actually, it uses message from `0x8a60080`, but nothing writes to there, which results no title.
- `(bool)left_choices_text_align` *(8 bytes)* : Set 0 to align the **choice texts** to the center.
- `(int)choice_amount` *(4 bytes)* : Choice amount to display.
- `(int...)choices_message_id` *(>= 4 bytes)* : Choice message IDs to display, from above to below.
  - This is message ID from **message address table in the PAC file**. Details on: [about message table](./guide/about-message.md#message-table).

`...` means any amounts of parameter.

> [!WARNING]
> **`choice_amount` must match to the amount of the `choice_message_id`** or it will cause unexpected behaviour.

### About the Choice Index

Choice index starts from zero, from choice above to below.

For example, for typical Yes/No dialog, Yes is 0 and No is 1.

## Example

Here is one example in hex:

```25 03 0d 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / f0 00 00 00 / 02 00 00 00 / 88 00 00 00 / f0 e6 05 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 01 00 00 00 / f4 e6 05 00 / 25 00 07 00```

Which is interpreted as:

```c
showDialogEx((int *)iVar0, (int)240, 0x2, 0x5e6f0, (int)0, (int)0, (int)1, 0x2, 0x1, 0x5e6f4, 0x70025)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892d788(int param_1,undefined4 param_2)

{
  char cVar1;
  short sVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  undefined4 *puVar6;
  int *piVar7;
  int *piVar8;
  int *piVar9;
  int *piVar10;
  int *piVar11;
  int *piVar12;
  uint *puVar13;
  int *piVar14;
  int iVar15;
  int iVar16;
  undefined *puVar17;
  float *pfVar18;
  undefined4 *puVar19;
  undefined4 *puVar20;
  undefined *puVar21;
  uint uVar22;
  undefined4 uVar23;
  uint uVar24;
  int iVar25;
  undefined4 *puVar26;
  float local_48;
  float local_44;
  undefined4 local_40;
  undefined4 local_3c;
  undefined4 local_38;
  undefined4 local_34;
  undefined4 local_30;
  int *local_2c;
  int local_28;
  short *local_24;
  undefined4 local_20 [8];
  
  iVar3 = Get_Execution_Pause_Phase(param_2);
  iVar4 = Save::Get_Save_BaseAddr(1);
  puVar26 = (undefined4 *)(param_1 + 0x1c);
  iVar5 = FUN_08a1ee38(*(undefined4 *)(param_1 + 0x1c));
  FUN_08a1ee40(*puVar26);
  if (iVar3 == 0) {
    iVar3 = FUN_08877b6c(1);
    iVar3 = FUN_08836f88(iVar3 + 0x10);
    if (-1 < (int)((uint)*(byte *)(*(int *)(iVar3 + 4) + 0x75) << 0x1d)) {
      iVar3 = FUN_08877b6c(1);
      iVar3 = FUN_08836f88(iVar3 + 0x10);
      puVar6 = (undefined4 *)&DAT_00000020;
      *(byte *)(*(int *)(iVar3 + 4) + 0x75) = *(byte *)(*(int *)(iVar3 + 4) + 0x75) | 4;
      puVar19 = local_20;
      puVar20 = puVar19;
      while (puVar20 != (undefined4 *)0x0) {
        *(undefined *)puVar19 = 0;
        puVar19 = (undefined4 *)((int)puVar19 + 1);
        puVar6 = (undefined4 *)((int)puVar6 + -1);
        puVar20 = puVar6;
      }
      puVar19 = (undefined4 *)Pac_Get_Param(param_2,0xf,1,4);
      piVar7 = (int *)Pac_Get_Param(param_2,1,1,4);
      piVar8 = (int *)Pac_Get_Param(param_2,2,1,4);
      piVar9 = (int *)Pac_Get_Param(param_2,3,0,4);
      piVar10 = (int *)Pac_Get_Param(param_2,4,1,4);
                    // default choice
      puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
      piVar11 = (int *)Pac_Get_Param(param_2,6,1,4);
      piVar12 = (int *)Pac_Get_Param(param_2,7,1,4);
      puVar13 = (uint *)Pac_Get_Param(param_2,8,0,4);
      uVar24 = DAT_08a70d04;
      if ((int)*puVar13 < (int)DAT_08a70d04) {
        uVar24 = *puVar13;
      }
      iVar3 = 0;
      if (0 < (int)uVar24) {
        puVar20 = local_20;
        do {
          piVar14 = (int *)Pac_Get_Param(param_2,9,0,4);
          iVar25 = *piVar14;
          if (iVar25 < 0) {
            *puVar20 = 0;
          }
          else {
            iVar15 = FUN_0883bc1c(param_2);
            iVar16 = Save::Get_Save_BaseAddr(1);
            uVar23 = Message::Get_MsgAddr_With_FullID
                               (iVar16 + 0x98,*(undefined4 *)(iVar15 + iVar25));
            *puVar20 = uVar23;
          }
          iVar3 = iVar3 + 1;
          puVar20 = puVar20 + 1;
        } while (iVar3 < (int)uVar24);
      }
      iVar3 = *piVar10;
      *(int *)(param_1 + 0x30) = iVar3;
      iVar25 = FUN_08877b6c(1);
      iVar25 = FUN_08836f88(iVar25 + 0x10);
      if (iVar3 == 0) {
        *(byte *)(*(int *)(iVar25 + 4) + 0x79) = *(byte *)(*(int *)(iVar25 + 4) + 0x79) & 0x7f;
      }
      else {
        *(byte *)(*(int *)(iVar25 + 4) + 0x79) = *(byte *)(*(int *)(iVar25 + 4) + 0x79) | 0x80;
      }
      iVar3 = FUN_08877b6c(1);
      iVar3 = FUN_08836f88(iVar3 + 0x10);
      *(byte *)(*(int *)(iVar3 + 4) + 0x79) = *(byte *)(*(int *)(iVar3 + 4) + 0x79) | 0x40;
      *puVar19 = 0xffffffff;
      if (*piVar11 == 0) {
        puVar17 = &DAT_08a60084;
      }
      else {
        puVar17 = (undefined *)Message::Get_MsgAddr_With_FullID(iVar4 + 0x98,0x302f9);
      }
      iVar3 = *piVar9;
      if (iVar3 < 0) {
        puVar21 = (undefined *)0x0;
      }
      else {
        iVar4 = FUN_0883bc1c(param_2);
        iVar25 = Save::Get_Save_BaseAddr(1);
        puVar21 = (undefined *)
                  Message::Get_MsgAddr_With_FullID(iVar25 + 0x98,*(undefined4 *)(iVar4 + iVar3));
      }
      if (puVar21 == (undefined *)0x0) {
        puVar17 = &DAT_08a60084;
        puVar21 = puVar17;
      }
      FUN_0892de9c(&local_30,iVar5);
      local_40 = 0x41400000;
      local_3c = 0x41400000;
      local_38 = 0x40e00000;
      local_34 = 0x40a00000;
      FUN_0885b580(local_28,&local_38,&local_40);
      if (local_28 != 0) {
        *local_24 = *local_24 + -1;
        if (local_24 == (short *)0x0) {
          sVar2 = 0;
        }
        else {
          sVar2 = *local_24;
        }
        if (sVar2 == 0) {
          (**(code **)(*local_2c + 0xc))(local_2c,local_28,local_24,local_30);
          FUN_0892e358(local_28,local_30);
        }
      }
      *(bool *)(iVar5 + 0xd30) = *piVar12 != 0;
      FUN_08930c1c(iVar5,puVar17,puVar21,0);
      uVar22 = 0;
      if (uVar24 != 0) {
        puVar20 = local_20;
        do {
          Message::Dialog::Dialog_Write_Message(iVar5,*puVar20);
          uVar22 = uVar22 + 1;
          puVar20 = puVar20 + 1;
        } while (uVar22 < uVar24);
      }
      FUN_08931324(iVar5);
      pfVar18 = (float *)FUN_08931dcc(iVar5);
      local_44 = (float)*piVar8 - pfVar18[1] * 0.5;
      local_48 = (float)*piVar7 - *pfVar18 * 0.5;
      FUN_08931c9c(iVar5,&local_48);
      FUN_08a1edb8(*puVar26,1,*puVar6,0);
      Pause_Execution(param_2,1);
      iVar3 = *(int *)(*(int *)(param_1 + 0x24) + 0x14);
      _DAT_08ab9524 = puVar19;
      if (iVar3 != 0) {
        *(undefined *)(iVar3 + 0x60) = 0;
      }
    }
  }
  else if (iVar3 == 1) {
    iVar3 = FUN_08851bec();
    uVar23 = *(undefined4 *)(iVar3 + 0x10c);
    iVar4 = *(int *)(*(int *)(param_1 + 0x24) + 0x14);
    iVar3 = Get_addr_0xd20_Data(iVar5);
    if (iVar3 == 0) {
      iVar3 = FUN_08877b6c(1);
      iVar3 = FUN_08836f88(iVar3 + 0x10);
      *(byte *)(*(int *)(iVar3 + 4) + 0x75) = *(byte *)(*(int *)(iVar3 + 4) + 0x75) & 0xfb;
      PAC::PAC_setCmdId(param_2,0);
      if (iVar4 != 0) {
        *(undefined *)(iVar4 + 0x60) = 1;
      }
    }
    else {
      iVar3 = Message::Dialog::Is_Answered(iVar5);
      if (iVar3 == 0) {
        if ((*(int *)(param_1 + 0x30) != 0) && (cVar1 = FUN_08852c04(uVar23), cVar1 != '\0')) {
          if (_DAT_08ab9524 == (undefined4 *)0x0) {
            *(undefined4 *)(param_1 + 0x30) = 0;
          }
          else {
            *_DAT_08ab9524 = 0xffffffff;
            *(undefined4 *)(param_1 + 0x30) = 0;
          }
          FUN_08a1edb8(*puVar26,0,0xffffffff,0);
          FUN_08a1ee08(*puVar26);
          iVar3 = FUN_08877b6c(1);
          iVar3 = FUN_08836f88(iVar3 + 0x10);
          *(byte *)(*(int *)(iVar3 + 4) + 0x79) = *(byte *)(*(int *)(iVar3 + 4) + 0x79) & 0x7f;
          iVar3 = FUN_08877b6c(1);
          iVar3 = FUN_08836f88(iVar3 + 0x10);
          *(byte *)(*(int *)(iVar3 + 4) + 0x79) = *(byte *)(*(int *)(iVar3 + 4) + 0x79) & 0xbf;
          iVar3 = FUN_08877b6c(1);
          iVar3 = FUN_08836f88(iVar3 + 0x10);
          *(byte *)(*(int *)(iVar3 + 4) + 0x75) = *(byte *)(*(int *)(iVar3 + 4) + 0x75) & 0xfb;
          PAC::PAC_setCmdId(param_2,0);
          if (iVar4 != 0) {
            *(undefined *)(iVar4 + 0x60) = 1;
          }
        }
      }
      else {
        if (_DAT_08ab9524 == (undefined4 *)0x0) {
          uVar23 = *puVar26;
        }
        else {
          uVar23 = FUN_089319fc(iVar5);
          *_DAT_08ab9524 = uVar23;
          uVar23 = *puVar26;
        }
        FUN_08a1edb8(uVar23,0,0xffffffff,0);
        FUN_08a1ee08(*puVar26);
        iVar3 = FUN_08877b6c(1);
        iVar3 = FUN_08836f88(iVar3 + 0x10);
        *(byte *)(*(int *)(iVar3 + 4) + 0x79) = *(byte *)(*(int *)(iVar3 + 4) + 0x79) & 0x7f;
        iVar3 = FUN_08877b6c(1);
        iVar3 = FUN_08836f88(iVar3 + 0x10);
        *(byte *)(*(int *)(iVar3 + 4) + 0x79) = *(byte *)(*(int *)(iVar3 + 4) + 0x79) & 0xbf;
        iVar3 = FUN_08877b6c(1);
        iVar3 = FUN_08836f88(iVar3 + 0x10);
        *(byte *)(*(int *)(iVar3 + 4) + 0x75) = *(byte *)(*(int *)(iVar3 + 4) + 0x75) & 0xfb;
        PAC::PAC_setCmdId(param_2,0);
        if (iVar4 != 0) {
          *(undefined *)(iVar4 + 0x60) = 1;
        }
      }
    }
  }
  return;
}
```

