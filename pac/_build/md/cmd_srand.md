# cmd_srand

Inititalises the random table.

When the game gets random value (like [cmd_rand](./cmd_rand.md) or from hardcoded Assembly code), the game gets the value from *random table*.

The *random table* is usually resetted between scenes, e.g. while opening the game, going to the hideout or loading a mission.

The random table uses **current system time** as seed.


Though, it seems like that the `cmd_srand` is not used anywhere in Patapon 3.

## Code Information

- **Name**: `cmd_srand`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 47 00`
- **Assembly Address in Memory** : `0x883b104`

## Parameters

This function is parameterless.


## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883b104(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  
  uVar1 = syscall::Time::sceKernelGetSystemTimeLow();
  Util::Random::Init_Rand_Seeds(0x8aab350,uVar1);
  DAT_08aabd14 = 1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

