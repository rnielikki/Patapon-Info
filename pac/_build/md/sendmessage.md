# sendMessage

Sends a system message to the **chat window**.

Used for showing current VS status to the chat window.

## Code Information

- **Name**: `sendMessage`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 11 01`
- **Assembly Address in Memory** : `0x892920c`

## Parameters

- `(int)player_id` *(8 bytes)* : Sender player ID to set, expected -1~3. -1 means nobody.
   - Please describe if this does actually something.
- `(int)quip_colour` *(8 bytes)* : System quip colour in system settings, expected -1~3. -1 uses default colour.
   - The colour cannot be adjusted normally in options page.
- `(bool)Var2` *(8 bytes)* : 1 always sends the message regardless of the target validity or multi status.
- `(bool)Var3` *(8 bytes)* : Quip rendring related, but unused.
- `(Address)sender_name` *(8 bytes)* : Address of the sender name messag in the PAC file. Keep -1 to hide this.
- `(Address)message_address` *(8 bytes)* : Address of the display message in the PAC file.

## Example

Here is one example in hex:

```25 16 11 01 / 04 00 00 00 / 01 00 00 00 / 02 00 00 00 / 02 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / ff ff ff ff / 01 00 00 00 / 80 14 07 00```

Which is interpreted as:

```c
sendMessage((int *)iVar1, (int)2, (int)0, (int)1, (int)-1, (index)464000)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892920c(int param_1,undefined4 param_2)

{
  bool bVar1;
  char cVar2;
  int *piVar3;
  int *piVar4;
  undefined4 uVar5;
  int iVar6;
  int iVar7;
  int iVar8;
  int iVar9;
  int iVar10;
  int iVar11;
  int iVar12;
  undefined local_3c;
  undefined local_3b;
  undefined2 local_3a;
  undefined2 local_38;
  undefined2 local_36;
  undefined local_34;
  undefined local_33;
  undefined4 local_30;
  undefined auStack44 [40];
  undefined4 local_4;
  
  piVar3 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar8 = *piVar3;
  piVar3 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar10 = *piVar3;
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar9 = *piVar3;
  piVar3 = (int *)Pac_Get_Param(param_2,3,1,4);
  iVar12 = *piVar3;
  piVar3 = (int *)Pac_Get_Param(param_2,4,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,5,1,4);
  uVar5 = Save::Get_Save_BaseAddr(1);
  iVar6 = Save::Get_BaseAddr__0x78(uVar5,1);
  iVar11 = *(int *)(iVar6 + 100);
  iVar6 = Get_Some_Flag(1);
  iVar6 = *(int *)(iVar6 + 0x44);
  if (((iVar11 == 0) || (iVar6 == 0)) || (iVar7 = Is_Multi(iVar11), iVar7 == 0))
  goto LAB_089294f4;
  iVar7 = Is_Multi(iVar11);
  if (iVar7 == 0) {
    cVar2 = '\0';
  }
  else {
    cVar2 = FUN_08986d3c(iVar11);
  }
  if (((cVar2 == '\0') && (iVar9 == 0)) || (iVar6 == -0x528)) goto LAB_089294f4;
  iVar11 = *(int *)(iVar6 + 0x54c);
  if (iVar11 == 4) {
    iVar11 = *(int *)(param_1 + 0x10);
  }
  else {
    if (((iVar11 != 3) && (iVar11 != 2)) && (iVar11 != 1)) goto LAB_089294f4;
    iVar11 = *(int *)(param_1 + 0x10);
  }
  iVar11 = *(int *)(*(int *)(iVar11 + 0x2d8) + 0x18);
  if (iVar11 == 0) goto LAB_089294f4;
  local_3c = 0x3c;
  local_36 = 0xcd1;
  local_3b = 0;
  local_3a = 0;
  local_38 = 0;
  Init_Space(auStack44);
  local_34 = 0xff;
  local_33 = 1;
  local_30 = 0;
  FUN_089fe4a4(auStack44);
  local_4 = 0xffffffff;
  local_34 = (undefined)iVar8;
  if (iVar10 == 3) {
    local_30 = 3;
  }
  else if (iVar10 == 2) {
    local_30 = 2;
  }
  else if (iVar10 == 1) {
    local_30 = 1;
  }
  else {
    local_30 = 0;
  }
  if (iVar8 < 0) {
    iVar6 = *piVar3;
LAB_08929470:
    if (iVar6 < 1) {
      Copy_MessageAddr(auStack44,0xffffffff);
    }
    else {
      iVar6 = FUN_0883bc1c(param_2);
      Copy_MessageAddr(auStack44,*(undefined4 *)(iVar6 + *piVar3));
    }
  }
  else {
    if (7 < iVar8) {
      iVar6 = *piVar3;
      goto LAB_08929470;
    }
    bVar1 = 3 < iVar8;
    if (bVar1) {
      iVar8 = iVar8 + -4;
    }
    iVar6 = FUN_089880e8(iVar6 + 0x850,bVar1,iVar8);
    if (iVar6 != 0) {
      Message::Quip::Save_Quip_Message(auStack44,iVar6 + 0xb8);
    }
  }
  iVar6 = FUN_0883bc1c(param_2);
  local_4 = *(undefined4 *)(iVar6 + *piVar4);
  local_33 = iVar12 != 0;
  if (iVar9 == 0) {
    FUN_089c4f5c(iVar11,&local_3c);
  }
  else {
    FUN_089c4fb0(iVar11,&local_3c);
  }
LAB_089294f4:
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

