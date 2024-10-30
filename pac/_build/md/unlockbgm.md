# unlockBGM

Unlocks a selectable theme. Part of the debug mode.

## Code Information

- **Name**: `unlockBGM`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 41 00`
- **Assembly Address in Memory** : `0x894d298`

## Parameters

- `(int)bgm_id` *(8 bytes)* : The theme ID to unlock.

## Example

Here is one example in hex:

```25 0a 41 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
unlockBGM((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894d298(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined4 uVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Save::Get_Save_BaseAddr(1);
  uVar3 = return__0x285a8(*(undefined4 *)(iVar2 + 0x50));
  FUN_08a33e0c(uVar3,*puVar1,1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

