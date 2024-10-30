# sendMiss

Sends command miss (command cancel).

## Code Information

- **Name**: `sendMiss`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 08 00`
- **Assembly Address in Memory** : `0x89706cc`

## Parameters

- `(int)has_fever_break_sound` *(8 bytes)* : 0 does not have fever break sound, 1 plays fever break sound.

## Example

Here is one example in hex:

```25 0c 08 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
sendMiss((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089706cc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if (iVar2 != 0) {
    func_0x08b5f620(iVar2,*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

