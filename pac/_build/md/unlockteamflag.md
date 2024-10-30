# unlockTeamFlag

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `unlockTeamFlag`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 40 00`
- **Assembly Address in Memory** : `0x894d228`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 0a 40 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
unlockTeamFlag((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894d228(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Save::Get_Save_BaseAddr(1);
  iVar2 = return__0x1c(*(undefined4 *)(iVar2 + 0x50));
  FUN_089cd4d4(iVar2 + 0xf1ac,*puVar1,1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

